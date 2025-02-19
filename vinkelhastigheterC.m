function [omega_styrarm, omega_tak] = vinkelhastigheterC(omega_bakrutan, theta_bakrutan, beta, gamma, L1, L2, L3)
    % Inputs:
    %   omega_bakrutan  - Vinkelhastighet för bakrutan [rad/s]
    %   theta_bakrutan  - Vinkelposition för bakrutan [rad]
    %   beta            - Nuvarande vinkel för styrarmen [rad]
    %   gamma           - Nuvarande vinkel för taket [rad]
    %   L1, L2, L3      - Längder på mekanismens delar [mm]
    %
    % Outputs:
    %   omega_styrarm   - Vinkelhastighet för styrarmen [rad/s]
    %   omega_tak       - Vinkelhastighet för taket [rad/s]
    
    % Jacobimatris
    a11 = L2 * sin(beta);
    a12 = -L3 * sin(gamma);
    a21 = -L2 * cos(beta);
    a22 = -L3 * cos(gamma);
    
    A = [a11 a12;
         a21 a22];
     
    % Deriverad vektor för begränsningar, driven av bakrutan
    b1 = L1 * sin(theta_bakrutan) * omega_bakrutan;
    b2 = -L1 * cos(theta_bakrutan) * omega_bakrutan;
    b = [b1; b2];
    
    % Lös det linjära systemet A * x = b för att hitta vinkelhastigheterna
    x = A \ b;
    
    % Tilldela outputs
    omega_styrarm = x(1); % Vinkelhastighet för styrarmen
    omega_tak = x(2);     % Vinkelhastighet för taket
end
