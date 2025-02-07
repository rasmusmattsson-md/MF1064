%matriser för hastigheter 
function [betat, gammat] = vinkelhastigheterO(alpha,alphat, beta, gamma, L1, L2, L3)

% Staller upp koefficientmatrisen (Detta är derivatana av vår Jacobianmatris)
a11 = L2*sin(beta);
a12 = -L3*sin(gamma);
a21 = -L2*cos(beta);
a22 = -L3*cos(gamma);

A = [a11 a12;
    a21 a22];

% Derivatan av vår tvångsekvation
b1 = L1 * sin(alpha) * alphat;
b2 = -L1 * cos(alpha) * alphat;
b  = [b1; b2];

% Loser det linjara ekvationssystemet
x =A\b;

% Delar upp lösing på variabler
betat = x(1);   % bakrutans vinkelhastighet [rad/s]
gammat = x(2);   

end
