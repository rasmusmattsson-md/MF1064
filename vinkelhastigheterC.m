function [omega_styrarm, omega_tak] = vinkelhastigheterC(omega_bakrutan, theta_bakrutan, beta, gamma, L1, L2, L3)
    % Inputs:
    %   omega_bakrutan  - Angular velocity of the rear window [rad/s]
    %   theta_bakrutan  - Angular position of the rear window [rad]
    %   beta            - Current angle of the control arm [rad]
    %   gamma           - Current angle of the roof [rad]
    %   L1, L2, L3      - Lengths of the mechanism components [mm]
    %
    % Outputs:
    %   omega_styrarm   - Angular velocity of the control arm [rad/s]
    %   omega_tak       - Angular velocity of the roof [rad/s]
    
    % Jacobian matrix derived from the mechanism geometry
    a11 = L2 * sin(beta);
    a12 = -L3 * sin(gamma);
    a21 = -L2 * cos(beta);
    a22 = -L3 * cos(gamma);
    
    A = [a11 a12;
         a21 a22];
     
    % Derivative vector for constraints, driven by the rear window
    b1 = L1 * sin(theta_bakrutan) * omega_bakrutan;
    b2 = -L1 * cos(theta_bakrutan) * omega_bakrutan;
    b = [b1; b2];
    
    % Solve the linear system A * x = b to find angular velocities
    x = A \ b;
    
    % Assign outputs
    omega_styrarm = x(1); % Angular velocity of the control arm
    omega_tak = x(2);     % Angular velocity of the roof
end
