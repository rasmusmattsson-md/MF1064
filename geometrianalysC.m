% Rensa arbetsminnet
clear; clc; close all;

% Geometric parameters
L1 = 657;  % Styrarm
L2 = 670;  % Bakruta
L3 = 50;   % Tak
L4 = 500;  % Takförlängning

a = 35;  % Punkt C:s x-koordinat
b = 44;  % Punkt C:s y-koordinat





% Simulation parameters
simuleringstid = 5; % [s]
num_steps = 300;    % Number of steps
t = linspace(0, simuleringstid, num_steps); % Time vector

% Constant angular velocity for the rear window
omega_bakrutan = 0.1; % [rad/s]

% Angular position of the rear window over time
theta_bakrutan = omega_bakrutan * t;

% State vector for the rear window
state_bakrutan = [theta_bakrutan; omega_bakrutan * ones(1, num_steps)];

% Initialize angle vectors
beta = zeros(1, num_steps);
gamma = zeros(1, num_steps);

% Initial angles for beta and gamma
beta(1) = 5 * pi / 180;  
gamma(1) = 20 * pi / 180;

% Expected ranges:
%   Beta: Starts at ~5° and changes over time.
%   Gamma: Starts at ~20° and changes over time.

% Recalculate angles beta and gamma for each time step
for i = 2:num_steps
    [beta(i), gamma(i)] = vinklar(theta_bakrutan(i), beta(i-1), gamma(i-1), L1, L2, L3, a, b);
end

% Log initial and final values of beta and gamma
disp('Initial angles:');
disp(['Beta(1): ', num2str(beta(1) * 180 / pi), '°']);
disp(['Gamma(1): ', num2str(gamma(1) * 180 / pi), '°']);
disp('Final angles:');
disp(['Beta(end): ', num2str(beta(end) * 180 / pi), '°']);
disp(['Gamma(end): ', num2str(gamma(end) * 180 / pi), '°']);

% Recalculate angular velocities for the control arm and roof
omega_styrarm_vec = zeros(1, num_steps);
omega_tak_vec = zeros(1, num_steps);

for i = 1:num_steps
    [omega_styrarm_vec(i), omega_tak_vec(i)] = vinkelhastigheterC(...
        omega_bakrutan, theta_bakrutan(i), beta(i), gamma(i), L1, L2, L3);
end

% DEBUG: Validate angular velocities
figure;
subplot(2, 1, 1);
plot(t, omega_styrarm_vec, 'r-', 'LineWidth', 2); hold on;
plot(t, omega_bakrutan * ones(1, num_steps), 'k--', 'LineWidth', 1.5);
grid on; xlabel('Tid [s]'); ylabel('\omega_{styrarm} [rad/s]');
legend('Styrarm', 'Bakrutan');
title('DEBUG: Validering av styrarmens vinkelhastighet');

subplot(2, 1, 2);
plot(t, omega_tak_vec, 'b-', 'LineWidth', 2); hold on;
plot(t, omega_bakrutan * ones(1, num_steps), 'k--', 'LineWidth', 1.5);
grid on; xlabel('Tid [s]'); ylabel('\omega_{tak} [rad/s]');
legend('Tak', 'Bakrutan');
title('DEBUG: Validering av takets vinkelhastighet');






% Calculate coordinates for Punkt T
xC = a; 
yC = -b;
xB = xC + L2 * cos(beta); 
yB = yC + L2 * sin(beta);
x_T = xB - L4 * cos(gamma); % Punkt T:s x-koordinat
y_T = yB + L4 * sin(gamma); % Punkt T:s y-koordinat

% Calculate velocity components of Punkt T
vx_T = [diff(x_T) ./ diff(t), NaN];
vy_T = [diff(y_T) ./ diff(t), NaN];
v_T = sqrt(vx_T.^2 + vy_T.^2);

%% DEBUG Validation of Angular Velocities
d_theta_bakrutan = [diff(theta_bakrutan) ./ diff(t), NaN];
d_beta = [diff(beta) ./ diff(t), NaN];
d_gamma = [diff(gamma) ./ diff(t), NaN];

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

%% Requested Plots

% Plot 1: Vinkeln på bakrutan och taket som funktion av vinkeln på styrarmen
figure;
plot(theta_bakrutan * 180/pi, beta * 180/pi, 'r-', 'LineWidth', 2); hold on;
plot(theta_bakrutan * 180/pi, gamma * 180/pi, 'b--', 'LineWidth', 2);
grid on;
xlabel('\theta_{bakrutan} [°]');
ylabel('Vinklar [°]');
legend('\beta', '\gamma', 'Location', 'best');
title('Vinkeln på bakrutan och taket som funktion av vinkeln på styrarmen');

% Plot 3: Samtliga 3 vinkelhastigheter som funktion av vinkeln på styrarmarna
figure;
plot(theta_bakrutan * 180/pi, omega_bakrutan * ones(1, num_steps), 'k', 'LineWidth', 2); hold on;
plot(theta_bakrutan * 180/pi, omega_styrarm_vec, 'r--', 'LineWidth', 2);
plot(theta_bakrutan * 180/pi, omega_tak_vec, 'b-.', 'LineWidth', 2);
grid on;
xlabel('\theta_{bakrutan} [°]');
ylabel('Vinkelhastigheter [rad/s]');
legend('\omega_{bakrutan}', '\omega_{styrarm}', '\omega_{tak}', 'Location', 'best');
title('Samtliga 3 vinkelhastigheter som funktion av vinkeln på styrarmarna');

% Plot 5: Hur punkten T rör sig i xy-planet
figure;
plot(x_T, y_T, 'b-', 'LineWidth', 2);
grid on; axis equal;
xlabel('x_T [mm]');
ylabel('y_T [mm]');
title('Hur punkten T rör sig i xy-planet');

% Plot 6: Koordinaterna för punkten T som funktion av vinkeln på styrarmarna
figure;
plot(theta_bakrutan * 180/pi, x_T, 'r-', 'LineWidth', 2); hold on;
plot(theta_bakrutan * 180/pi, y_T, 'b--', 'LineWidth', 2);
grid on;
xlabel('\theta_{bakrutan} [°]');
ylabel('Punkt T:s koordinater [mm]');
legend({'x_T', 'y_T'}, 'Location', 'best');
title('Koordinaterna för punkten T som funktion av vinkeln på styrarmarna');

% Plot 7: Hastigheterna hos punkten T som funktion av vinkeln på styrarmarna
figure;
plot(theta_bakrutan * 180/pi, vx_T, 'r-', 'LineWidth', 2); hold on;
plot(theta_bakrutan * 180/pi, vy_T, 'g--', 'LineWidth', 2);
plot(theta_bakrutan * 180/pi, v_T, 'b-.', 'LineWidth', 2);
grid on;
xlabel('\theta_{bakrutan} [°]');
ylabel('Hastigheter [mm/s]');
legend({'v_{xT}', 'v_{yT}', 'v_T'}, 'Location', 'best');
title('Hastigheterna hos punkten T som funktion av vinkeln på styrarmarna');

%% Requested Table: Sammanställning av vinklar i uppfällt respektive nedfällt läge
summary_table = table(...
    [theta_bakrutan(1); theta_bakrutan(end)] * 180/pi, ...
    [beta(1); beta(end)] * 180/pi, ...
    [gamma(1); gamma(end)] * 180/pi, ...
    'VariableNames', {'Theta_Bakrutan [°]', 'Beta [°]', 'Gamma [°]'}, ...
    'RowNames', {'Nedfällt', 'Uppfällt'});

disp('Sammanställning av vinklar i uppfällt respektive nedfällt läge:');
disp(summary_table);
