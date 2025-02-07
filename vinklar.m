function [beta, gamma] = vinklar(alpha, beta_guess, gamma_guess, L1, L2, L3, a, b)
    % Konstanter
    tol = 1e-6;      % 1 μm precision
    imax = 100;      % Max antal iterationer
    
    % Initiera variabler
    beta = beta_guess;
    gamma = gamma_guess;
    x = [beta; gamma];

    % Beräknar initiala funktioner
    f = compute_f(L1, L2, L3, alpha, beta, gamma, a, b);

    % Newton-Raphson iteration
    for i = 1:imax
        if norm(f) <= tol
            break; % Avsluta om konvergerat
        end

        % Beräkna Jacobian
        J = [ L2*sin(beta), -L3*sin(gamma);
             -L2*cos(beta), -L3*cos(gamma)];
        
        % Kontrollera om Jacobian är singulär
        if abs(det(J)) < 1e-12
            warning('Newton-Raphson stoppad: Jacobian är singulär.');
            return;
        end

        

        % Newton-Raphson uppdatering
        x = x - J\f;
        beta = x(1);
        gamma = x(2);

        % Uppdatera funktionsvektor
        f = compute_f(L1, L2, L3, alpha, beta, gamma, a, b);
    end

    % Kontrollera om konvergens uppnåtts
    if norm(f) > tol
        warning('Newton-Raphson ej konvergerat inom 1 μm precision: %.8f m', norm(f));
    end
end

% Hjälpfunktion för att beräkna funktionsvektorn
function f = compute_f(L1, L2, L3, alpha, beta, gamma, a, b)
    f1 = L1*cos(alpha) + L3*cos(gamma) - L2*cos(beta) - a;
    f2 = L1*sin(alpha) - L3*sin(gamma) - L2*sin(beta) + b;
    f  = [f1; f2];
end
