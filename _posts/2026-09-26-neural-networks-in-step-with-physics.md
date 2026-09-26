---
layout: post
title: "Neural Networks in Step with Physics"
date: 2026-09-26
lang: en
math: true
permalink: /blog/neural-networks-in-step-with-physics/
excerpt: "From property prediction to physics-aware operator learning; a note on how neural networks are moving from regression models toward learning-based simulators."
---

## From Materials Property Prediction to Learning Physical Operators

For much of the history of machine learning in science and engineering, neural networks were used mainly as nonlinear regression models. A researcher would provide a set of input variables and expect the model to return one or more numerical quantities. In materials science, for example, one might give a network the chemical composition, annealing temperature, and annealing time, and ask it to predict properties such as band gap, density, elastic modulus, electrical conductivity, or carrier mobility:

$$
\left(x_{\mathrm{Al}},T_{\mathrm{anneal}},t_{\mathrm{anneal}}\right)
\xrightarrow{\mathrm{NN}}
\left(E_g,\rho,\mu\right)
$$

In this setting, the neural network approximates a mapping between two finite-dimensional spaces:

$$
\mathbf{x}\in \mathbb{R}^{n}
\longrightarrow
\mathbf{y}\in \mathbb{R}^{m}
$$

In practice, the network extracts a complex relation between a number of numerical features and a number of numerical outputs. These models can be powerful, but their role is mostly limited to property prediction, structure classification, or building a surrogate for a predefined output.

The important shift in recent years is that neural networks are no longer restricted to learning mappings between a few numbers. Architectures such as **Neural Operators**, **DeepONet**, **Fourier Neural Operators**, and their physics-informed variants are designed to learn mappings between functions, fields, and physical distributions.

In this framework, the model is not merely estimating the answer to one problem. It is trying to learn **the solution operator for a family of physical problems**.

---

## 1. The Difference Between a Function and an Operator

To understand why this matters, we first need to distinguish between a function and an operator.

An ordinary function may take a few numbers and return a few numbers:

$$
f:\mathbb{R}^{n}\rightarrow \mathbb{R}^{m}
$$

For example:

$$
f(x_{\mathrm{Al}},T,t)=E_g
$$

Here, both input and output are vectors with a finite number of components.

An operator, by contrast, takes an entire function or field and produces another function or field:

$$
\mathcal{G}:a(\mathbf{x})\longrightarrow u(\mathbf{x})
$$

Here, $a(\mathbf{x})$ may represent the spatial distribution of a material property, while $u(\mathbf{x})$ represents the response field of the system.

For example, in a heat-transfer problem one may write:

$$
\mathcal{G}:
\begin{bmatrix}
k(\mathbf{x}) \\
Q(\mathbf{x},t) \\
T_0(\mathbf{x}) \\
BC
\end{bmatrix}
\longrightarrow
T(\mathbf{x},t)
$$

The model input is not simply a list of numbers. It may include:

* the thermal-conductivity field $k(\mathbf{x})$;
* the heat-source distribution $Q(\mathbf{x},t)$;
* the initial-temperature field $T_0(\mathbf{x})$;
* boundary conditions on different surfaces;
* the geometry or computational domain.

The output is not a single quantity such as maximum temperature. It is the full temperature field in space and time:

$$
T=T(x,y,z,t)
$$

The model is therefore learning a relation between two function spaces, not merely between two finite-dimensional vector spaces. Neural Operators were introduced precisely to approximate such mappings: mappings from one function space to another.

---

## 2. What Do Classical Numerical Simulators Do?

Many physical phenomena are described by partial differential equations. For example, the transient heat equation can be written as:

$$
\rho C_p\frac{\partial T}{\partial t}
=
\nabla\cdot\left(k\nabla T\right)
+
Q
$$

To solve this equation, one usually needs to:

1. define the geometry;
2. discretize the domain;
3. specify the material properties;
4. apply initial and boundary conditions;
5. discretize the continuous equations;
6. solve the resulting algebraic system at each time step.

Methods such as finite differences, finite volumes, finite elements, and spectral methods solve the governing equations for one specified set of parameters.

If the laser power, scan speed, thermal conductivity, or boundary conditions change, the numerical problem usually has to be solved again. In other words, a classical solver runs a new solution process for each new input:

$$
a_i(\mathbf{x})
\xrightarrow{\text{Numerical Solver}}
u_i(\mathbf{x})
$$

where $i$ denotes one specific instance of the problem.

The solver itself does not usually learn a general mapping from all possible inputs to all possible outputs. It is an algorithm that solves the equations each time it is called.

---

## 3. The Ordinary Neural Network as a Surrogate Model

Before Neural Operators became common, neural networks in physics and materials science were often used as surrogate models.

Suppose thousands of finite-element simulations have been performed for different combinations of laser power $P$, scan speed $v$, and beam radius $r$. One can train a network to predict, for example, the maximum temperature or melt-pool dimensions:

$$
(P,v,r)
\xrightarrow{\mathrm{NN}}
(T_{\max},L_{\mathrm{melt}},W_{\mathrm{melt}})
$$

Such a model can be very fast, but it only produces the quantities that were defined as outputs in advance. If later we need the full temperature field, the cooling rate at a specific point, or the thermal gradient, the network output or even the model architecture must be changed.

Another approach is to add coordinates to the input:

$$
(x,y,z,t,P,v,r)
\xrightarrow{\mathrm{NN}}
T
$$

In that case, the network can predict the temperature at any queried point. Still, conceptually, it remains a function of several numerical inputs. It may also be trained for a particular geometry, set of boundary conditions, or parameter range. A fundamental change in the functional input, such as a completely new conductivity field, is not necessarily easy for such a model to handle.

---

## 4. What Did Physics-Informed Neural Networks Change?

Physics-Informed Neural Networks, or PINNs, were an important step in connecting neural networks with differential equations.

In a PINN, the network usually takes spatial and temporal coordinates and outputs the unknown field:

$$
(x,t)\xrightarrow{\mathrm{NN}}u_\theta(x,t)
$$

Then, using automatic differentiation, the required derivatives in the governing equation are computed. If the problem is written abstractly as:

$$
\mathcal{N}[u](x,t)=0
$$

the physical residual of the network is:

$$
R_\theta(x,t)=\mathcal{N}[u_\theta](x,t)
$$

The loss function is usually composed of several terms:

$$
\mathcal{L}
=
\lambda_{\mathrm{PDE}}\mathcal{L}_{\mathrm{PDE}}
+
\lambda_{\mathrm{BC}}\mathcal{L}_{\mathrm{BC}}
+
\lambda_{\mathrm{IC}}\mathcal{L}_{\mathrm{IC}}
+
\lambda_{\mathrm{data}}\mathcal{L}_{\mathrm{data}}
$$

The network is therefore not trained only on data. It must also satisfy the differential equation, boundary conditions, and initial conditions as well as possible.

This idea was powerful because it moved neural networks away from being purely data-driven interpolators and turned them into models constrained by physics.

However, a standard PINN usually solves one specific problem. If a coefficient, geometry, or boundary condition changes, the network often has to be trained again or at least adapted significantly.

In this sense, a PINN is closer to a method for solving a particular differential problem:

$$
(\mathbf{x},t)\longrightarrow u(\mathbf{x},t)
$$

It is not necessarily a method for learning the solution operator of all possible versions of that problem.

---

## 5. What Exactly Does a Neural Operator Learn?

A Neural Operator attempts to learn the solution operator itself.

Suppose we have a parametric equation:

$$
\mathcal{N}\left(u;a\right)=0
$$

Here, $a$ may represent a collection of functional and parametric inputs, for example:

$$
a=
\left\{
k(\mathbf{x}),
Q(\mathbf{x},t),
BC,
IC,
\text{geometry}
\right\}
$$

For each choice of $a$, the equation has a different solution $u$. We can therefore define a solution operator:

$$
\mathcal{G}^{\dagger}:a\mapsto u
$$

The goal of a Neural Operator is to learn a parametric approximation of this operator:

$$
\mathcal{G}_{\theta}\approx \mathcal{G}^{\dagger}
$$

After training, for a new input $a_{\mathrm{new}}$, the model can directly estimate the response field:

$$
u_{\mathrm{pred}}
=
\mathcal{G}_{\theta}(a_{\mathrm{new}})
$$

The fundamental difference is that the model is not trained on one solution. It is trained on a collection of functional input-output pairs:

$$
\left\{
a_i(\mathbf{x}),u_i(\mathbf{x})
\right\}_{i=1}^{N}
$$

Its goal is therefore to learn the response of a family of problems.

For heat transfer, for instance, one may generate hundreds or thousands of simulations with different heat sources and spatially varying properties:

$$
\begin{bmatrix}
k_i(\mathbf{x}) \\
Q_i(\mathbf{x},t) \\
BC_i
\end{bmatrix}
\longrightarrow
T_i(\mathbf{x},t)
$$

By observing these samples, the model learns how changes in the input fields modify the entire temperature field.

---

## 6. Why Is This Idea Mathematically Important?

The mathematical importance of Neural Operators lies in the fact that many physical systems are naturally defined on infinite-dimensional spaces.

A temperature field, velocity field, concentration field, electric potential, stress field, or phase field is not just a vector with a few components.

A physical field is, in principle, a continuous object:

$$
u:\Omega\rightarrow\mathbb{R}
$$

Sampling this field on a mesh is only a discrete representation of it:

$$
u(\mathbf{x}_1),u(\mathbf{x}_2),\ldots,u(\mathbf{x}_n)
$$

The theoretical goal of a Neural Operator is to learn, as much as possible, the continuous operator itself, rather than merely a relationship between vectors on one fixed mesh.

This is important because, in the ideal case, such a model can:

* work on different meshes;
* generalize to different resolutions;
* produce an output field, not just a scalar;
* approximate nonlocal physical interactions;
* act as a learned surrogate for a PDE solver.

Of course, in practice this ideal is limited by architecture, data, discretization, and training. Still, the conceptual shift is important.

---

## 7. How Does DeepONet Represent an Operator?

DeepONet is one of the first widely used architectures for learning operators.

Its idea is based on a universal approximation theorem for operators. DeepONet usually consists of two main parts:

### Branch Network

The Branch Network receives information about the input function. For example, the function $a(x)$ may be sampled at a number of sensor points:

$$
[a(x_1),a(x_2),\ldots,a(x_m)]
$$

The Branch Network then converts this input function into a latent representation.

### Trunk Network

The Trunk Network receives the coordinates of the point at which we want to evaluate the output:

$$
y=(x,t)
$$

The final output is usually constructed by combining the outputs of the Branch and Trunk networks:

$$
\mathcal{G}_{\theta}(a)(y)
=
\sum_{k=1}^{p}
b_k(a)t_k(y)
$$

In this expression:

* $b_k(a)$ is produced by the Branch Network;
* $t_k(y)$ is produced by the Trunk Network;
* the sum gives the value of the output field at the point $y$.

The key idea is that the model learns how the input function affects the entire output function.

---

## 8. How Does the Fourier Neural Operator Work?

The Fourier Neural Operator, or FNO, is another important architecture for learning operators.

The central idea of FNO is that many nonlocal interactions between fields can be represented efficiently in Fourier space. A general Neural Operator layer can be written as:

$$
v_{l+1}(\mathbf{x})
=
\sigma\left[
Wv_l(\mathbf{x})
+
\int_{\Omega}
\kappa_\theta(\mathbf{x},\mathbf{y})
v_l(\mathbf{y})
\,d\mathbf{y}
\right]
$$

Here:

* $v_l$ is the field representation at layer $l$;
* $W$ is a local linear transformation;
* $\kappa_\theta$ is a learnable integral kernel;
* $\sigma$ is a nonlinear activation function.

In FNO, this integral operation is parameterized in Fourier space:

$$
v
\xrightarrow{\mathcal{F}}
\hat{v}
\xrightarrow{R_\theta}
R_\theta\hat{v}
\xrightarrow{\mathcal{F}^{-1}}
v'
$$

The basic steps of each layer are:

1. transform the field to Fourier space;
2. keep a finite number of Fourier modes;
3. apply learnable weights to those modes;
4. transform the result back to physical space;
5. apply a nonlinear function.

This structure allows the model to capture long-range spatial interactions more efficiently than many purely local neural-network architectures.

---

## 9. What Is a Physics-Informed Neural Operator?

Purely data-driven Neural Operators often require a large number of input-output pairs:

$$
a_i\longrightarrow u_i
$$

But generating $u_i$ may require running many expensive simulations. Physics-Informed Neural Operators, or PINOs, were introduced to reduce this dependence on data.

In PINO, the loss includes not only the error between the predicted response and reference data, but also the residual of the governing equation:

$$
\mathcal{L}_{\mathrm{PINO}}
=
\mathcal{L}_{\mathrm{data}}
+
\lambda_{\mathrm{PDE}}\mathcal{L}_{\mathrm{PDE}}
+
\lambda_{\mathrm{BC}}\mathcal{L}_{\mathrm{BC}}
+
\lambda_{\mathrm{IC}}\mathcal{L}_{\mathrm{IC}}
$$

The difference from a PINN is that the model output is not merely the solution of one specific problem. PINO tries to learn the solution operator of a family of parametric PDEs while also guiding its predictions toward physical consistency.

### PINN

$$
(x,t)
\xrightarrow{\mathrm{NN}}
u(x,t)
$$

for one specified set of coefficients and boundary conditions.

### PINO

$$
[a(x),BC,IC]
\xrightarrow{\mathrm{Neural\ Operator}}
u(x,t)
$$

for a family of inputs, coefficients, and conditions.

PINO combines data and PDE constraints, making it possible to learn operators even when the available data are limited or imperfect.

---

## 10. Heat Transfer in Additive Manufacturing

Suppose the goal is to simulate the temperature field in laser powder bed fusion. The governing equation can be written as:

$$
\rho(T)C_p(T)\frac{\partial T}{\partial t}
=
\nabla\cdot\left[k(T)\nabla T\right]
+
Q_{\mathrm{laser}}(\mathbf{x},t)
$$

with convective and radiative boundary conditions:

$$
-k\nabla T\cdot\mathbf{n}
=
h(T-T_\infty)
+
\epsilon\sigma
\left(T^4-T_\infty^4\right)
-
q_{\mathrm{laser}}
$$

In an ordinary regression model, one might have:

$$
(P,v,r,\eta)
\longrightarrow
(T_{\max},L_{\mathrm{melt}},W_{\mathrm{melt}})
$$

In a PINN, one might train a network such as:

$$
(x,y,z,t)\longrightarrow T(x,y,z,t)
$$

But this network is usually trained for a specific set of values for $P$, $v$, $r$, geometry, and material properties.

In a Neural Operator, one can define a broader mapping:

$$
\mathcal{G}_{\theta}:
\begin{bmatrix}
Q_{\mathrm{laser}}(\mathbf{x},t) \\
k(\mathbf{x},T) \\
BC \\
T_0
\end{bmatrix}
\longrightarrow
T(\mathbf{x},t)
$$

By observing many different problems, the model learns how changes in the heat source, material properties, and boundary conditions modify the temperature field.

From the temperature field, one can then extract quantities such as:

$$
\dot{T}=\frac{\partial T}{\partial t}
$$

$$
G=|\nabla T|
$$

$$
R=
\frac{1}{G}
\left|
\frac{\partial T}{\partial t}
\right|
$$

or determine the melt-pool region from:

$$
\Omega_{\mathrm{melt}}
=
\left\{
\mathbf{x}:T(\mathbf{x},t)\geq T_{\mathrm{liquidus}}
\right\}
$$

In this case, the model does not merely predict the length or width of the melt pool. It produces a fundamental field from which many physical quantities can be computed.

---

## 11. Microstructure Evolution

Another important example is microstructure evolution.

Many microstructural processes, such as grain growth, phase separation, spinodal decomposition, solidification, or precipitate evolution, can be described by phase-field equations.

For example, the Allen-Cahn equation can be written as:

$$
\frac{\partial \phi}{\partial t}
=
-M\frac{\delta F}{\delta\phi}
$$

and the Cahn-Hilliard equation as:

$$
\frac{\partial c}{\partial t}
=
\nabla\cdot
\left(
M\nabla\frac{\delta F}{\delta c}
\right)
$$

In an ordinary regression model, the initial microstructure may be converted into a few descriptors, and the final average grain size or phase fraction may be predicted:

$$
\text{Descriptors of initial microstructure}
\longrightarrow
\bar{d}_{\mathrm{grain}}
$$

In operator learning, one can instead learn the mapping:

$$
\phi(\mathbf{x},t_0)
\longrightarrow
\phi(\mathbf{x},t)
$$

or, more generally:

$$
\begin{bmatrix}
\phi_0(\mathbf{x}) \\
M(\mathbf{x}) \\
\gamma(\mathbf{x}) \\
T(\mathbf{x},t)
\end{bmatrix}
\longrightarrow
\phi(\mathbf{x},t)
$$

The model then generates the full spatial and temporal evolution of the microstructure. This makes it possible to examine grain-boundary motion, phase growth or dissolution, coarsening, and morphological changes directly from the output field.

---

## 12. Are Atomic Models Also Neural Operators?

This question requires some care.

In atomistic modeling, the input usually consists of atomic species and atomic positions:

$$
\mathcal{X}
=
\left\{
(Z_i,\mathbf{r}_i)
\right\}_{i=1}^{N}
$$

The model may predict the total energy:

$$
\mathcal{X}\longrightarrow E
$$

Forces can then be obtained from the gradient of the energy:

$$
\mathbf{F}_i
=
-\frac{\partial E}{\partial \mathbf{r}_i}
$$

Stress can also be computed from the derivative of energy with respect to strain:

$$
\boldsymbol{\sigma}
=
\frac{1}{V}
\frac{\partial E}{\partial\boldsymbol{\varepsilon}}
$$

These models are usually called **machine-learned interatomic potentials**. They are not necessarily Neural Operators in the conventional PDE sense, because they often map a discrete atomic structure to energy, forces, and stress.

However, a similar computational transformation has occurred. The model no longer predicts one fixed property; it approximates a potential-energy surface. It can then be placed inside molecular dynamics and used to compute the time trajectory of the system:

$$
m_i\frac{d^2\mathbf{r}_i}{dt^2}
=
\mathbf{F}_i
$$

Here, the model replaces repeated and expensive electronic-structure calculations, such as DFT. It is therefore better to call these models **surrogate potentials** or **learned force fields**, rather than directly calling all of them Neural Operators.

The shared conceptual point is that the neural network has become part of a simulator.

---

## 13. What Is a Foundation Simulation Model?

The idea of foundation models has entered scientific computing as well.

In natural language processing, a foundation model is trained on a large and diverse dataset and can then be adapted to many downstream tasks. An analogous idea in scientific simulation is to train a model on a broad family of physical systems so that it can later be adapted to related problems.

Conceptually:

$$
\text{Single surrogate}
\quad
\longrightarrow
\quad
\text{one family of problems}
$$

$$
\text{Foundation simulator}
\quad
\longrightarrow
\quad
\text{many related families of problems}
$$

Scientific foundation models usually combine simulation data, experimental data, Transformer architectures, graph networks, operator learning, pretraining, and transfer learning.

The hope is that a model trained on a broad physical domain will learn reusable representations of physical behavior.

For example, a model trained on many heat-transfer problems might later be fine-tuned for a specific additive-manufacturing process. A model trained on many atomistic systems might be adapted to a new alloy. A model trained on many PDE families might be used as a general-purpose component in simulation workflows.

This direction is promising, but it also raises difficult questions about reliability, extrapolation, physical consistency, uncertainty, and interpretability.

---

## 14. Why Can These Models Be Very Fast?

Classical numerical solvers often require iterative solution of large algebraic systems. The computational cost may grow rapidly with mesh size, time-step count, and problem complexity.

In a trained Neural Operator, inference mostly consists of tensor operations, matrix multiplications, convolutions, message passing, or Fourier transforms:

$$
u_{\mathrm{pred}}
=
\mathcal{G}_{\theta}(a)
$$

The main cost has already been paid during training. Therefore, if only one problem is to be solved, training a large model may not be economically justified. But if the system must be evaluated thousands or millions of times, the training cost can be amortized over many runs.

This is especially useful for:

* design optimization;
* uncertainty quantification;
* real-time control;
* inverse problems;
* parameter sweeps;
* digital twins;
* rapid screening of materials or process conditions.

In such cases, a learned simulator can be much faster than repeatedly running a classical solver.

---

## 15. Has the Neural Operator Really Understood the Physics?

This is one of the most important questions.

A Neural Operator may produce accurate outputs within the training distribution, but this does not necessarily mean it has understood the physics in a deep sense.

The model may have learned:

* a robust approximation of the solution operator;
* statistical correlations in the dataset;
* low-dimensional structures in the solution space;
* artifacts of the simulator used to generate the training data;
* or some mixture of all of these.

Therefore, accuracy on a test set is not enough. One must also examine physical consistency, conservation laws, behavior outside the training range, sensitivity to perturbations, and uncertainty.

A neural simulator is not automatically a replacement for physical understanding. It is a computational tool whose validity must be tested.

---

## 16. Interpolation and Extrapolation

Many failures of machine-learning models in physics arise from the difference between interpolation and extrapolation.

Suppose a model is trained on:

$$
P\in[100,300]\ \mathrm{W}
$$

$$
v\in[0.5,1.5]\ \mathrm{m/s}
$$

If the new input is:

$$
P=220\ \mathrm{W},
\qquad
v=1.0\ \mathrm{m/s}
$$

the model is operating within the training range.

But if the new input is:

$$
P=800\ \mathrm{W},
\qquad
v=5\ \mathrm{m/s}
$$

the physical regime may change completely. Phenomena such as keyhole formation, strong evaporation, recoil pressure, Marangoni flow, or melt-pool instability may enter the problem even though they were absent from the training data.

In that case, the model may produce an output that looks smooth and plausible, while being physically wrong.

This is one of the central challenges of neural simulation.

---

## 17. Conservation and Physical Consistency

A model may match reference data pointwise and still violate important physical laws.

For example, it may produce a velocity field that looks similar to the reference solution but violates incompressibility:

$$
\nabla\cdot\mathbf{u}\neq0
$$

Or, in heat transfer, it may fail to satisfy energy balance:

$$
\frac{d}{dt}
\int_{\Omega}
\rho C_pT,d\Omega
\neq
\dot{Q}_{\mathrm{in}}-\dot{Q}_{\mathrm{out}}
$$

Or, in mechanics, the predicted stress and strain fields may be incompatible with equilibrium or compatibility conditions:

$$
\nabla\cdot\boldsymbol{\sigma}+\mathbf{b}\neq0
$$

For this reason, using only a pointwise error such as MSE is not enough. Evaluation should also include:

* conservation checks;
* residuals of governing equations;
* boundary-condition satisfaction;
* dimensional consistency;
* symmetry and invariance properties;
* behavior under perturbations.

Physics-informed training can help, but it does not remove the need for careful validation.

---

## 18. Error Accumulation in Time

Time-dependent problems introduce another difficulty: error accumulation.

There are two common approaches.

### Direct Prediction of the Full Time Field

$$
a(\mathbf{x})
\longrightarrow
u(\mathbf{x},t)
$$

In this case, the model produces the entire time trajectory at once.

### Autoregressive Prediction

$$
u_t
\longrightarrow
u_{t+\Delta t}
$$

The output of each step is then used as the input to the next:

$$
u_0\rightarrow u_1\rightarrow u_2\rightarrow\cdots\rightarrow u_n
$$

The autoregressive method is flexible, but error can accumulate at every step. A small error in $u_1$ enters the computation of $u_2$, and after many steps the predicted trajectory may drift away from the true dynamics.

This problem is especially serious for chaotic systems, turbulent flows, long-time microstructure evolution, and nonlinear coupled systems.

---

## 19. Uncertainty: The Often Forgotten Part of Neural Simulation

A classical simulator also contains uncertainty: uncertainty in material properties, boundary conditions, numerical discretization, model assumptions, and measurement data.

In neural simulation, two types of uncertainty are especially important.

### Aleatoric Uncertainty

This uncertainty comes from noise or variability in the data itself. For example, experimental measurements may contain noise, or a material may have sample-to-sample variability.

### Epistemic Uncertainty

This uncertainty comes from lack of knowledge. It may be high in regions where the model has seen little or no training data.

A useful neural simulator should not only output a prediction. It should ideally say how uncertain that prediction is.

Approaches such as Bayesian neural networks, ensembles, dropout-based uncertainty, conformal prediction, and probabilistic operators attempt to address this issue.

Without uncertainty estimates, a model may look confident even when it is extrapolating far outside its training range.

---

## 20. The Relationship Between These Models and Classical Solvers

Neural Operators should not be seen simply as enemies or replacements of classical solvers.

The future relationship is more likely to be collaborative:

$$
\text{Classical Solver}
+
\text{Neural Surrogate}
+
\text{Experimental Data}
+
\text{Physical Constraints}
$$

For example, a Neural Operator can be used to generate an initial prediction, which is then corrected by a few iterations of a numerical solver. Or the model can identify critical regions and guide adaptive mesh refinement. In other cases, only one expensive submodel, such as a closure model, constitutive law, or chemistry source term, may be replaced by a neural network.

In many realistic settings, the most powerful approach will not be purely neural or purely classical, but hybrid.

---

## 21. From Direct Simulation to Inverse Design

Once a fast differentiable simulator exists, it can be used not only for prediction but also for design.

In the forward problem, we have:

$$
a
\xrightarrow{\mathcal{G}}
u
$$

In inverse design, the goal is to find the input that produces a desired response $u^*$:

$$
a^*
=
\arg\min_a
\left|
\mathcal{G}(a)-u^*
\right|^2
$$

For example:

* find process parameters that generate a desired thermal history;
* design a material distribution that produces a target stress field;
* choose boundary conditions that yield a desired flow pattern;
* optimize microstructure for a target property.

In addition, if the model is differentiable, one can compute the gradient of the objective with respect to the input:

$$
\frac{\partial J}{\partial a}
=
\frac{\partial J}{\partial u}
\frac{\partial \mathcal{G}_\theta}{\partial a}
$$

This turns simulation from a purely predictive tool into part of an automated design system.

---

## 22. Does the Future Belong to a General Physics Model?

It is tempting to imagine a single general model that can solve all physical problems. But physics is broad, multiscale, and deeply structured.

The laws, relevant variables, symmetries, conservation principles, and numerical difficulties differ from quantum systems to fluids, solids, plasmas, biological systems, and materials processes.

Therefore, a fully general physics model is still far from reality.

More plausible is the emergence of domain-specific foundation models:

* foundation models for fluids;
* foundation models for atomistic systems;
* foundation models for materials processing;
* foundation models for climate or weather;
* foundation models for multiphysics simulation;
* foundation models for PDE families.

These models may not replace theory, experiment, or numerical analysis. But they may become new computational layers between physical laws and practical engineering decisions.

---

## 23. Summary

The role of neural networks in science has changed in several stages.

### First Stage: Property Prediction

$$
\text{parameters}
\longrightarrow
\text{property}
$$

For example:

$$
(x_{\mathrm{Al}},T,t)
\longrightarrow
E_g
$$

At this stage, the network is an advanced nonlinear regression model.

### Second Stage: Approximating a Field or Solving a Problem

$$
(\mathbf{x},t)
\longrightarrow
u(\mathbf{x},t)
$$

PINNs are an important example of this stage. The network approximates the response of a physical problem as a continuous function and incorporates physical laws during training.

### Third Stage: Learning the Solution Operator

$$
\text{input function or field}
\longrightarrow
\text{solution field}
$$

For example:

$$
[k(\mathbf{x}),Q(\mathbf{x},t),BC]
\longrightarrow
T(\mathbf{x},t)
$$

At this stage, the network tries to learn the mapping between a family of functional inputs and a family of physical responses.

This is why Neural Operators, PINO, DeepONet, FNO, learned force fields, and scientific foundation models all point to a broader transformation.

Neural networks are no longer only tools for fitting data. In some domains, they are becoming components of simulation itself.

Still, their power should not hide their limitations. A neural simulator must be tested for extrapolation, conservation, uncertainty, physical consistency, and interpretability.

If used carefully, these models can become a bridge between data, physical laws, and computation.

They do not eliminate the need for physics. Their value comes precisely from the possibility of moving in step with physics.
