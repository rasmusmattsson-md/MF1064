% Rensa arbetsminnet
clear; clc; close all;

% Geometriska parametrar
L1 = 657;  % Styrarm
L2 = 670;  % Bakruta
L3 = 50;   % Tak
L4 = 500;  % Takförlängning

a = 35;  % Punkt C:s x-koordinat
b = 44;  % Punkt C:s y-koordinat

% Simulering av parametrar
simuleringstid = 10; % [s]
num_steps = 300;    % Antal steg
t = linspace(0, simuleringstid, num_steps); % Tidsvektor

% Målvinkel för bakrutan vid simuleringens slut (147 grader)
theta_target = 49*pi/60; 

% Beräkna dynamisk vinkelhastighet
omega_bakrutan = theta_target / simuleringstid; % [rad/s]

% Vinkelposition för bakrutan över tid
theta_bakrutan = omega_bakrutan * t;


% Tillståndsvektor för bakrutan
state_bakrutan = [theta_bakrutan; omega_bakrutan * ones(1, num_steps)];

% Initiera vinkelvektorer
beta = zeros(1, num_steps);
gamma = zeros(1, num_steps);

% Initiala vinklar för beta och gamma
beta(1) = 5 * pi / 180;  
gamma(1) = 20 * pi / 180;

% Förväntade intervall:
%   Beta: Startar vid ~5° och förändras över tid.
%   Gamma: Startar vid ~20° och förändras över tid.

% Beräkna om vinklarna beta och gamma för varje tidssteg
for i = 2:num_steps
    [beta(i), gamma(i)] = vinklar(theta_bakrutan(i), beta(i-1), gamma(i-1), L1, L2, L3, a, b);
end

% Beräkna slutvärden för beta och gamma
beta_slut = beta(end);
gamma_slut = gamma(end);

% Beräkna konstanta vinkelhastigheter i grader per sekund
omega_styrarm_deg = (beta_slut - beta(1)) / simuleringstid * (180 / pi);
omega_tak_deg = (gamma_slut - gamma(1)) / simuleringstid * (180 / pi);

% Visa resultaten
disp(['Konstant vinkelhastighet för styrarmen: ', num2str(omega_styrarm_deg), ' grader/s']);
disp(['Konstant vinkelhastighet för taket: ', num2str(omega_tak_deg), ' grader/s']);



% Logga initiala och slutliga värden för beta och gamma
disp('Initiala vinklar:');
disp(['Beta(1): ', num2str(beta(1) * 180 / pi), '°']);
disp(['Gamma(1): ', num2str(gamma(1) * 180 / pi), '°']);
disp('Slutliga vinklar:');
disp(['Beta(end): ', num2str(beta(end) * 180 / pi), '°']);
disp(['Gamma(end): ', num2str(gamma(end) * 180 / pi), '°']);

% Beräkna om vinkelhastigheterna för styrarmen och taket
omega_styrarm_vec = zeros(1, num_steps);
omega_tak_vec = zeros(1, num_steps);

for i = 1:num_steps
    [omega_styrarm_vec(i), omega_tak_vec(i)] = vinkelhastigheterC(...
        omega_bakrutan, theta_bakrutan(i), beta(i), gamma(i), L1, L2, L3);
end

% DEBUG: Validera vinkelhastigheter
figure;
subplot(2, 1, 1);
plot(t, omega_styrarm_vec, 'r-', 'LineWidth', 2); hold on;
plot(t, omega_bakrutan * ones(1, num_steps), 'k--', 'LineWidth', 1.5);
grid on; xlabel('Tid [s]'); ylabel('\omega_{styrarm} [rad/s]');
legend('Styrarm', 'Bakrutan');
title('DEBUG: Validering av styrarmens vinkelhastighet');
% Beräkna den konstanta rotationshastigheten
omega_styrarm_mean = mean(omega_styrarm_vec); % Medelvärdet av styrarmens vinkelhastighet
omega_bakrutan_const = omega_bakrutan; % Konstant värde för bakrutan
% Omvandla till grader per sekund
omega_styrarm_deg = omega_styrarm_mean * (180/pi);
omega_bakrutan_deg = omega_bakrutan_const * (180/pi);

% Skriv ut resultaten i grader
fprintf('Konstant rotationshastighet krävs:\n');
fprintf('Styrarm: %.4f grader/s\n', omega_styrarm_deg);
fprintf('Bakrutan: %.4f grader/s\n', omega_bakrutan_deg);


subplot(2, 1, 2);
plot(t, omega_tak_vec, 'b-', 'LineWidth', 2); hold on;
plot(t, omega_bakrutan * ones(1, num_steps), 'k--', 'LineWidth', 1.5);
grid on; xlabel('Tid [s]'); ylabel('\omega_{tak} [rad/s]');
legend('Tak', 'Bakrutan');
title('DEBUG: Validering av takets vinkelhastighet');

% Beräkna koordinater för Punkt T
xC = a; 
yC = -b;
xB = xC + L2 * cos(beta); 
yB = yC + L2 * sin(beta);
x_T = xB - L4 * cos(gamma); % Punkt T:s x-koordinat
y_T = yB + L4 * sin(gamma); % Punkt T:s y-koordinat

% Beräkna hastighetskomponenter för Punkt T
vx_T = [diff(x_T) ./ diff(t), NaN];
vy_T = [diff(y_T) ./ diff(t), NaN];
v_T = sqrt(vx_T.^2 + vy_T.^2);

% Beräkna hastigheten för takets främre hörn vid uppfällt läge
vx_T = [diff(x_T) ./ diff(t), NaN];
vy_T = [diff(y_T) ./ diff(t), NaN];
v_T = sqrt(vx_T.^2 + vy_T.^2);

% Hastighet vid uppfällt läge
v_T_uppfallt = v_T(end-1);
disp(['Hastigheten för takets främre hörn vid uppfällt läge: ', num2str(v_T_uppfallt), ' mm/s']);


%% DEBUG:
d_theta_bakrutan = [diff(theta_bakrutan) ./ diff(t), NaN];
d_beta = [diff(beta) ./ diff(t), NaN];
d_gamma = [diff(gamma) ./ diff(t), NaN];

max_hojd_tak = max(y_T);
disp(['Den maximala höjden som taket når: ', num2str(max_hojd_tak), ' mm']);

figure;
subplot(3, 1, 1);
plot(t, omega_bakrutan * ones(1, num_steps), 'k', t, d_theta_bakrutan, 'r--', 'LineWidth', 2);
grid on; xlabel('Tid [s]'); ylabel('\omega_{bakrutan} [rad/s]');
legend('Beräknad', 'Numerisk derivata'); 
title('DEBUG: Validering av \omega_{bakrutan}');

subplot(3, 1, 2);
plot(t, omega_styrarm_vec, 'k', t, d_beta, 'r--', 'LineWidth', 2);
grid on; xlabel('Tid [s]'); ylabel('\omega_{styrarm} [rad/s]');
legend('Beräknad', 'Numerisk derivata'); 
title('DEBUG: Validering av \omega_{styrarm}');

subplot(3, 1, 3);
plot(t, omega_tak_vec, 'k', t, d_gamma, 'r--', 'LineWidth', 2);
grid on; xlabel('Tid [s]'); ylabel('\omega_{tak} [rad/s]');
legend('Beräknad', 'Numerisk derivata'); 
title('DEBUG: Validering av \omega_{tak}');

%% Frågor:

% Plot 1: Vinkeln på bakrutan och taket som funktion av vinkeln på styrarmen
figure;
plot(theta_bakrutan * 180/pi, beta * 180/pi, 'r-', 'LineWidth', 2); hold on;
plot(theta_bakrutan * 180/pi, gamma * 180/pi, 'b--', 'LineWidth', 2);
grid on;
xlabel('\theta_{bakrutan} [°]');
ylabel('Vinklar [°]');
legend('\beta', '\gamma', 'Location', 'best');
title('Vinkeln på bakrutan och taket som funktion av vinkeln på styrarmen');

% Plot 3: Alla 3 vinkelhastigheter som funktion av vinkeln på styrarmarna
figure;
plot(theta_bakrutan * 180/pi, omega_bakrutan * ones(1, num_steps), 'k', 'LineWidth', 2); hold on;
plot(theta_bakrutan * 180/pi, omega_styrarm_vec, 'r--', 'LineWidth', 2);
plot(theta_bakrutan * 180/pi, omega_tak_vec, 'b-.', 'LineWidth', 2);
grid on;
xlabel('\theta_{bakrutan} [°]');
ylabel('Vinkelhastigheter [rad/s]');
legend('\omega_{bakrutan}', '\omega_{styrarm}', '\omega_{tak}', 'Location', 'best');
title('Alla 3 vinkelhastigheter som funktion av vinkeln på styrarmarna');

% Plot 5: Hur punkten T rör sig i xy-planet
figure;
plot(x_T, y_T, 'b-', 'LineWidth', 2);
grid on; axis equal;
xlabel('x_T [mm]');
ylabel('y_T [mm]');
title('Hur punkten T rör sig i xy-planet');

% Plot 2: Vinkelhastigheter som funktion av tiden
figure;
plot(t, omega_bakrutan * ones(1, num_steps), 'k', 'LineWidth', 2); hold on;
plot(t, omega_styrarm_vec, 'r--', 'LineWidth', 2);
plot(t, omega_tak_vec, 'b-.', 'LineWidth', 2);
grid on;
xlabel('Tid [s]');
ylabel('Vinkelhastigheter [rad/s]');
legend('\omega_{bakrutan}', '\omega_{styrarm}', '\omega_{tak}', 'Location', 'best');
title('Vinkelhastigheter som funktion av tiden');


% Sammanställning av vinklar i uppfällt och nedfällt läge
summary_table = table(...
    [theta_bakrutan(1); theta_bakrutan(end)] * 180/pi, ...
    [beta(1); beta(end)] * 180/pi, ...
    [gamma(1); gamma(end)] * 180/pi, ...
    'VariableNames', {'Theta_Bakrutan [°]', 'Beta [°]', 'Gamma [°]'}, ...
    'RowNames', {'Nedfällt', 'Uppfällt'});

disp('Sammanställning av vinklar i uppfällt respektive nedfällt läge:');
disp(summary_table);
