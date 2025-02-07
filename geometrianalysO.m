% Rensa arbetsminnet
clear; clc; close all;

% Geometriska parametrar
L1 = 657;  % Styrarm
L2 = 670;  % Bakruta
L3 = 50;   % Tak
L4 = 500;  % Takförlängning

a = 35;  % Punkt C:s x-koordinat
b = 44;  % Punkt C:s y-koordinat

% Vinkelområde
alpha_values = (0:0.5:147) * pi/180;  
alpha_start = alpha_values(1) * 180/pi;
alpha_end = alpha_values(end) * 180/pi;
num_steps = length(alpha_values);

% Initiera vektorer för vinklar
beta = zeros(1, num_steps);
gamma = zeros(1, num_steps);
beta(1) = 5 * pi/180;  
gamma(1) = 20 * pi/180; 

% Beräkna vinklar för varje steg
[beta(1), gamma(1)] = vinklar(alpha_values(1), beta(1), gamma(1), L1, L2, L3, a, b);
for i = 2:num_steps
    [beta(i), gamma(i)] = vinklar(alpha_values(i), beta(i-1), gamma(i-1), L1, L2, L3, a, b);
end

% DEBUG: Validation of angular velocities
simuleringstid = 10; 
omega_alpha = (alpha_end*pi/180 - alpha_start*pi/180) / simuleringstid;
alphat = omega_alpha * ones(1, num_steps);

betat = zeros(1, num_steps);
gammat = zeros(1, num_steps);
for i = 1:num_steps
    [betat(i), gammat(i)] = vinkelhastigheterO(alpha_values(i), alphat(i), beta(i), gamma(i), L1, L2, L3);
end

% Numerical derivatives for validation
t = linspace(0, simuleringstid, num_steps);
d_alpha = [diff(alpha_values) ./ diff(t), NaN];
d_beta = [diff(beta) ./ diff(t), NaN];
d_gamma = [diff(gamma) ./ diff(t), NaN];


% Initiera koordinater
xO = zeros(1, num_steps);
yO = zeros(1, num_steps);

xC = xO + a;
yC = yO - b;

xB = xC + L2 * cos(beta);
yB = yC + L2 * sin(beta);
xA = xO + L1 * cos(alpha_values);
yA = yO + L1 * sin(alpha_values);
xP = xB - (L3 + L4) * cos(gamma);
yP = yB + (L3 + L4) * sin(gamma);

% Beräkna hastighetskomponenter och resultant för punkt T
vx_T = [diff(xP) ./ diff(t), NaN]; % x-hastighet
vy_T = [diff(yP) ./ diff(t), NaN]; % y-hastighet
v_T = sqrt(vx_T.^2 + vy_T.^2); % Resultant hastighet


% Animation of the mechanism
figure;
for i = 1:num_steps
    clf; hold on; grid on; axis equal;
    xlim([-1200 900]); ylim([-1200 900]); 

    % Plot mechanism components
    plot([xO(i) xA(i)], [yO(i) yA(i)], 'ro-', 'LineWidth', 2); % Styrarm
    plot([xC(i) xB(i)], [yC(i) yB(i)], 'bo-', 'LineWidth', 2); % Bakruta
    plot([xB(i) xA(i)], [yB(i) yA(i)], 'ko-', 'LineWidth', 2); % Takarm
    plot([xB(i) xP(i)], [yB(i) yP(i)], 'mo-', 'LineWidth', 2); % Takförlängning

    xlabel('x [mm]', 'FontSize', 14);
    ylabel('y [mm]', 'FontSize', 14);
    title('Animering av mekanismens rörelse', 'FontSize', 14);

    pause(0.005);
end

% Requested Plot 1: Vinkeln på bakrutan och taket som funktion av vinkeln på styrarmen
figure;
plot(alpha_values * 180/pi, beta * 180/pi, 'r-', 'LineWidth', 2); hold on;
plot(alpha_values * 180/pi, gamma * 180/pi, 'b--', 'LineWidth', 2);
grid on;
xlabel('\alpha [°]');
ylabel('Vinklar [°]');
legend('\beta', '\gamma', 'Location', 'best');
title('Vinkeln på bakrutan och taket som funktion av vinkeln på styrarmen');

% Requested Plot 3: Samtliga 3 vinkelhastigheter som funktion av vinkeln på styrarmarna
figure;
plot(alpha_values * 180/pi, alphat, 'k', 'LineWidth', 2); hold on;
plot(alpha_values * 180/pi, betat, 'r--', 'LineWidth', 2);
plot(alpha_values * 180/pi, gammat, 'b-.', 'LineWidth', 2);
grid on;
xlabel('\alpha [°]');
ylabel('Vinkelhastigheter [rad/s]');
legend('\alpha_t', '\beta_t', '\gamma_t', 'Location', 'best');
title('Samtliga 3 vinkelhastigheter som funktion av vinkeln på styrarmarna');

% Requested Plot 5: Hur punkten T rör sig i xy-planet
figure;
plot(xP, yP, 'b-', 'LineWidth', 2);
grid on; axis equal;
xlabel('x_T [mm]');
ylabel('y_T [mm]');
title('Hur punkten T rör sig i xy-planet');

% Requested Plot 6: Koordinaterna för punkten T som funktion av vinkeln på styrarmarna
figure;
plot(alpha_values * 180/pi, xP, 'r-', 'LineWidth', 2); hold on;
plot(alpha_values * 180/pi, yP, 'b--', 'LineWidth', 2);
grid on;
xlabel('\alpha [°]');
ylabel('Punkt T:s koordinater [mm]');
legend({'x_T', 'y_T'}, 'Location', 'best');
title('Koordinaterna för punkten T som funktion av vinkeln på styrarmarna');

% Requested Plot 7: Hastigheterna hos punkten T som funktion av vinkeln på styrarmarna
figure;
plot(alpha_values * 180/pi, vx_T, 'r-', 'LineWidth', 2); hold on;
plot(alpha_values * 180/pi, vy_T, 'g--', 'LineWidth', 2);
plot(alpha_values * 180/pi, v_T, 'b-.', 'LineWidth', 2);
grid on;
xlabel('\alpha [°]');
ylabel('Hastigheter [mm/s]');
legend({'v_{xT}', 'v_{yT}', 'v_T'}, 'Location', 'best');
title('Hastigheterna hos punkten T som funktion av vinkeln på styrarmarna');

% Requested Table 2: Sammanställning av vinklar i uppfällt respektive nedfällt läge
summary_table = table(...
    [alpha_values(1); alpha_values(end)] * 180/pi, ...
    [beta(1); beta(end)] * 180/pi, ...
    [gamma(1); gamma(end)] * 180/pi, ...
    'VariableNames', {'Alpha [°]', 'Beta [°]', 'Gamma [°]'}, ...
    'RowNames', {'Nedfällt', 'Uppfällt'});

disp('Sammanställning av vinklar i uppfällt respektive nedfällt läge:');
disp(summary_table);




% DEBUG Validation Plots
figure;
subplot(3, 1, 1); 
plot(t, alphat, 'k', t, d_alpha, 'r--', 'LineWidth', 2);
grid on; xlabel('Tid [s]'); ylabel('\alpha_t [rad/s]');
legend('Beräknad', 'Numerisk derivata'); 
title('DEBUG: Validering av \alpha_t');

subplot(3, 1, 2); 
plot(t, betat, 'k', t, d_beta, 'r--', 'LineWidth', 2);
grid on; xlabel('Tid [s]'); ylabel('\beta_t [rad/s]');
legend('Beräknad', 'Numerisk derivata'); 
title('DEBUG: Validering av \beta_t');

subplot(3, 1, 3); 
plot(t, gammat, 'k', t, d_gamma, 'r--', 'LineWidth', 2);
grid on; xlabel('Tid [s]'); ylabel('\gamma_t [rad/s]');
legend('Beräknad', 'Numerisk derivata'); 
title('DEBUG: Validering av \gamma_t');