---
layout: post
title: "If the Laws of Physics Are Reversible, Why Doesn’t a Broken Glass Rebuild Itself?"
date: 2026-09-27
lang: en
math: true
permalink: /blog/why-doesnt-a-broken-glass-rebuild-itself/
excerpt: "How reversible microscopic laws give rise to entropy, macroscopic irreversibility, and the thermodynamic arrow of time."
---

One of the things that initially confused me about statistical mechanics was the statement that many microscopic laws of physics are **time-reversible**.

If that is true, consider a glass falling from a table and shattering.

We see

$$
\text{intact glass}
\rightarrow
\text{fall}
\rightarrow
\text{impact}
\rightarrow
\text{broken glass}.
$$

But we never see the opposite:

$$
\text{broken glass}
\rightarrow
\text{fragments coming together}
\rightarrow
\text{glass jumping upward}
\rightarrow
\text{intact glass}.
$$

This seems completely reasonable from everyday experience. But there is a problem.

If the microscopic equations governing the atoms are reversible, shouldn't the second process also be possible?

To understand this apparent paradox, we need to understand several ideas that at first seem separate: **symmetry, time reversal, microstates, macrostates, probability, entropy, correlations, and the arrow of time.**

---

## 1. What Does Symmetry Mean in Physics?

When we hear the word *symmetry*, we often imagine something visually symmetric, such as a circle or a butterfly.

But symmetry has a more general meaning in physics.

A symmetry exists when we perform some transformation and an important physical property—usually the laws describing the system—remains unchanged.

In a compact form,

$$
\boxed{
\text{symmetry}
=
\text{invariance under a transformation}
}
$$

For example, imagine performing an experiment today and repeating exactly the same experiment tomorrow.

We expect the laws of physics to remain the same.

Mathematically, we can shift time:

$$
t\rightarrow t+t_0.
$$

If the laws remain unchanged, we have **time-translation symmetry**.

Similarly, suppose we move an entire isolated experiment from one location to another:

$$
\mathbf r\rightarrow\mathbf r+\mathbf a.
$$

The fundamental laws should not suddenly change simply because the experiment was moved. This corresponds to **spatial-translation symmetry**.

Rotating an isolated experiment gives another example:

$$
\mathbf r\rightarrow R\mathbf r.
$$

If the laws retain the same form, we have **rotational symmetry**.

These symmetries are not just mathematically beautiful. Through Noether's theorem, continuous symmetries are deeply connected to conservation laws:

$$
\text{time-translation symmetry}
\longleftrightarrow
\text{energy conservation},
$$

$$
\text{space-translation symmetry}
\longleftrightarrow
\text{momentum conservation},
$$

and

$$
\text{rotational symmetry}
\longleftrightarrow
\text{angular-momentum conservation}.
$$

So symmetry is one of the organizing principles of physics.

---

## 2. What Does It Mean to Break a Symmetry?

There is an important distinction between the symmetry of the **laws** and the symmetry of the **state**.

Imagine a perfectly symmetric hill with a ball balanced exactly at its top.

No horizontal direction is preferred.

But once the ball rolls down, it must go somewhere.

Perhaps it rolls to the right.

The underlying landscape may still be symmetric, but the particular state chosen by the ball is not.

This is the basic idea behind **spontaneous symmetry breaking**:

$$
\boxed{
\text{symmetric laws}
+
\text{an asymmetric state}
}
$$

A physical example occurs in ferromagnets.

Above the Curie temperature, there may be no preferred macroscopic magnetization direction, and approximately

$$
\langle \mathbf M\rangle=0.
$$

Below the transition temperature, the material can spontaneously develop a magnetization:

$$
\langle\mathbf M\rangle\neq0.
$$

The laws themselves do not necessarily contain an instruction saying, "magnetize in this particular direction."

Instead, the system chooses one of several symmetry-related possibilities.

This distinction—between the symmetry of a law and the symmetry of a state—will become useful when thinking about time.

---

## 3. What Does Time-Reversal Symmetry Mean?

Consider a particle moving according to some equation of motion.

Its trajectory can be represented as

$$
\mathbf r(t).
$$

Now imagine playing a movie of its motion backward.

Mathematically, time reversal involves

$$
t\rightarrow -t.
$$

Position transforms as

$$
\mathbf r(t)\rightarrow\mathbf r(-t).
$$

But velocity is the derivative of position:

$$
\mathbf v=\frac{d\mathbf r}{dt}.
$$

Therefore, under time reversal,

$$
\mathbf v(t)\rightarrow-\mathbf v(-t).
$$

Likewise, momentum changes sign:

$$
\mathbf p(t)\rightarrow-\mathbf p(-t).
$$

So time reversal does not simply mean replacing $t$ with $-t$. Quantities such as momentum also have to be reversed appropriately.

Now consider Newton's equation for a conservative force:

$$
m\frac{d^2x}{dt^2}=F(x).
$$

Velocity changes sign under time reversal, but acceleration does not:

$$
\frac{d^2x}{dt^2}
\rightarrow
\frac{d^2x}{dt^2}.
$$

Consequently, the time-reversed trajectory can also satisfy the same equation.

This is what we mean when we say that the dynamics are **time-reversal symmetric**.

---

## 4. Reversing Every Particle

Now imagine a system containing many particles.

A microscopic state can be represented schematically by

$$
X=
(\mathbf r_1,\mathbf r_2,\ldots,\mathbf r_N,
\mathbf p_1,\mathbf p_2,\ldots,\mathbf p_N).
$$

Suppose the system evolves for some time.

At a particular instant, imagine that we could magically reverse every momentum with perfect accuracy:

$$
\boxed{
\mathbf p_i\rightarrow-\mathbf p_i
}
$$

for every particle.

For an ideal time-reversal-symmetric Hamiltonian system, the system would then retrace its previous microscopic trajectory.

This leads to a surprising conclusion.

In principle, microscopic mechanics can allow something resembling a shattered glass reconstructing itself.

And now we have a problem.

---

## 5. The Broken-Glass Paradox

Imagine dropping a glass.

Initially,

$$
\text{glass on table}.
$$

Then,

$$
\text{glass falling}.
$$

Then,

$$
\text{impact}.
$$

Finally,

$$
\text{broken glass}.
$$

If the microscopic dynamics are reversible, why don't we ever observe the reverse movie?

The first important point is that the final state isn't really just

$$
\text{broken glass}.
$$

During the collision, energy spreads throughout the environment.

Some becomes motion of the fragments.

Some becomes microscopic vibrations inside the glass.

Some enters the floor.

Some heats the surroundings.

Some produces pressure waves in the air that we hear as sound.

So the complete final microscopic state includes not only the glass but also an enormous number of surrounding degrees of freedom.

To exactly reverse the process, we would have to reverse essentially **all relevant microscopic momenta and correlations**.

Air molecules carrying the sound wave would have to move in precisely the correct reverse pattern.

Vibrations in the floor would have to converge back toward the impact point.

Thermal motion would have to organize itself appropriately.

Every glass fragment would have to follow exactly the reverse trajectory.

If this impossible-looking preparation could actually be achieved, then the equations of mechanics could allow

$$
\text{broken glass}
\rightarrow
\text{impact}
\rightarrow
\text{glass rising}
\rightarrow
\text{intact glass}.
$$

So the reverse process is not necessarily forbidden by microscopic mechanics.

Something else explains why we never see it.

That something is **statistics**.

---

## 6. Microstates and Macrostates

Suppose I say:

> There is a gas inside this box.

This is a macroscopic statement.

Perhaps I additionally specify its volume, pressure, temperature, and particle number:

$$
V,\quad P,\quad T,\quad N.
$$

But I have not told you the exact position and momentum of every molecule:

$$
(\mathbf r_1,\mathbf p_1),
(\mathbf r_2,\mathbf p_2),
\ldots,
(\mathbf r_N,\mathbf p_N).
$$

The complete microscopic specification is called a **microstate**.

The coarse description using quantities such as pressure, temperature, volume, density, or magnetization describes a **macrostate**.

The crucial point is:

$$
\boxed{
\text{Many different microstates can correspond to the same macrostate.}
}
$$

This is the bridge between microscopic mechanics and thermodynamics.

---

## 7. A Simple Example with Four Particles

Imagine four particles in a box.

For simplicity, each particle can be either on the left $L$ or the right $R$.

There are

$$
2^4=16
$$

possible arrangements.

Consider the macrostate

> All particles are on the left.

There is only one corresponding arrangement:

$$
LLLL.
$$

Now consider the macrostate

> Two particles are on the left and two are on the right.

There are several possible microstates:

$$
LLRR,
$$

$$
LRLR,
$$

$$
LRRL,
$$

$$
RLLR,
$$

$$
RLRL,
$$

$$
RRLL.
$$

There are

$$
\binom42=6
$$

such microstates.

Already, with only four particles, an approximately uniform distribution corresponds to more microscopic possibilities.

Now imagine

$$
N\sim10^{23}.
$$

The difference becomes enormous.

---

## 8. Why Gas Spreads Through a Box

Suppose every molecule independently has roughly equal probability of being in either half of a box.

For $N$ molecules, the probability that every molecule happens to be in the left half is

$$
P=\left(\frac12\right)^N.
$$

For

$$
N\sim10^{23},
$$

this is unimaginably small.

It isn't exactly zero.

And this distinction is important.

Physics does not necessarily say:

> The gas cannot spontaneously collect in one corner.

Instead, statistical mechanics says:

> The number of microscopic states corresponding to such an arrangement is incredibly small compared with the number corresponding to equilibrium.

This is a very different statement.

---

## 9. Boltzmann's Connection to Entropy

Boltzmann captured this idea in one of the most famous equations in physics:

$$
\boxed{
S=k_B\ln\Omega
}
$$

where

- $S$ is entropy,
- $k_B$ is Boltzmann's constant,
- $\Omega$ is the number of microscopic states compatible with the chosen macrostate.

A macrostate corresponding to many possible microstates has larger entropy.

Schematically,

$$
\Omega_{\text{high}}\gg\Omega_{\text{low}}
$$

implies

$$
S_{\text{high}}>S_{\text{low}}.
$$

So equilibrium is special in an interesting way:

It looks ordinary macroscopically, but it corresponds to an overwhelmingly large number of microscopic possibilities.

---

## 10. Is Entropy Just Probability?

It is tempting to say:

> Entropy is just probability.

That captures part of the intuition, but it is too simple.

Entropy is a precisely defined physical/statistical quantity, and different ensembles and formulations require some care.

But the essential statistical-mechanical idea is that higher-entropy macrostates generally correspond to vastly larger sets of accessible microscopic configurations.

Suppose a low-entropy macrostate corresponds to a small region of phase space:

$$
\Gamma_{\mathrm{low}}.
$$

An equilibrium macrostate corresponds to an enormous region:

$$
\Gamma_{\mathrm{eq}}.
$$

Typically,

$$
|\Gamma_{\mathrm{eq}}|
\gg
|\Gamma_{\mathrm{low}}|.
$$

If we know only that the system is initially in the low-entropy macrostate, overwhelmingly many microscopic states compatible with that description evolve toward macrostates occupying larger regions.

Therefore, we typically observe

$$
\boxed{
S_{\mathrm{low}}
\rightarrow
S_{\mathrm{high}}.
}
$$

So entropy increase is deeply statistical.

It describes what is overwhelmingly typical for macroscopic systems.

---

## 11. Why Does System Size Matter So Much?

This also explains why irreversibility becomes so convincing in macroscopic systems.

For four particles, large fluctuations are normal.

For ten particles, unusual arrangements are still possible.

For

$$
10^{23}
$$

particles, deviations from equilibrium can become fantastically improbable.

This is one reason thermodynamics appears almost deterministic even though statistical mechanics underneath it is probabilistic.

For a macroscopic system,

$$
\text{overwhelming probability}
$$

can become experimentally indistinguishable from

$$
\text{certainty}.
$$

This is an important recurring idea in statistical physics:

$$
\boxed{
\text{large numbers turn statistical tendencies into robust macroscopic laws.}
}
$$

---

## 12. Return to the Broken Glass

We can now understand the glass more carefully.

An intact glass represents a relatively constrained macrostate.

Its atoms must form a very particular organized structure and shape.

After breaking, there are enormously more microscopic configurations compatible with our coarse description

$$
\text{"broken glass + dispersed energy."}
$$

So the system naturally evolves from

$$
\text{small set of compatible states}
$$

toward

$$
\text{vast set of compatible states}.
$$

Schematically,

$$
\Omega_{\text{intact}}
\ll
\Omega_{\text{broken+environment}}.
$$

Therefore,

$$
S_{\text{intact}}
<
S_{\text{broken+environment}}.
$$

This is why the direction

$$
\text{intact}\rightarrow\text{broken}
$$

is overwhelmingly typical, whereas

$$
\text{broken}\rightarrow\text{intact}
$$

is overwhelmingly atypical.

But there is another subtlety.

---

## 13. A Normal Broken Glass and a Time-Reversed Broken Glass Are Not the Same Microscopic State

Suppose a glass breaks along a microscopic trajectory

$$
X_0\rightarrow X_1\rightarrow X_2\rightarrow X_3.
$$

Now reverse every relevant momentum in $X_3$.

Call that new state

$$
X_3^*.
$$

The dynamics can then follow

$$
X_3^*
\rightarrow
X_2^*
\rightarrow
X_1^*
\rightarrow
X_0^*.
$$

Macroscopically, both $X_3$ and $X_3^*$ might simply look like:

> a broken glass on the floor.

But microscopically they are completely different.

The ordinary broken-glass state has typical microscopic motions.

The specially prepared reversed state contains extraordinarily precise correlations between an enormous number of particles.

The air molecules, glass atoms, floor vibrations, and other relevant degrees of freedom are coordinated in exactly the right way to produce the reversed evolution.

So:

$$
\boxed{
\text{same-looking macrostate}
\neq
\text{same microstate}.
}
$$

This is one of the most important ideas in the whole discussion.

---

## 14. The Reversibility Paradox

Now the problem becomes even deeper.

Suppose entropy increases along the original trajectory:

$$
S_0<S_1<S_2<S_3.
$$

If we perfectly reverse the microscopic motion at the end, the system follows the opposite trajectory:

$$
S_3>S_2>S_1>S_0.
$$

Entropy decreases.

But the microscopic equations are still satisfied.

This raises an obvious question:

> If microscopic physics permits entropy-decreasing trajectories, how can the second law say that entropy increases?

This is closely related to **Loschmidt's reversibility paradox**.

The resolution is statistical.

The second law does not arise simply because the microscopic equations mathematically forbid entropy decrease.

Rather, entropy-decreasing trajectories require extraordinarily special microscopic conditions.

A generic state chosen from the equilibrium macrostate will almost certainly not contain the precise correlations needed to reconstruct the glass.

The time-reversed state does.

Therefore, it is possible but extraordinarily atypical.

---

## 15. Microscopic Reversibility and Macroscopic Irreversibility Can Coexist

This is the central lesson.

There is no contradiction between saying

$$
\boxed{\text{microscopic dynamics can be reversible}}
$$

and

$$
\boxed{\text{macroscopic behavior is effectively irreversible}}.
$$

The microscopic equations tell us which trajectories are **possible**.

Statistical mechanics tells us which macroscopic behaviors are **typical**.

These are different questions.

The microscopic equations may permit

$$
A\rightarrow B
$$

and

$$
B^*\rightarrow A^*.
$$

But if the macrostate $B$ contains overwhelmingly more compatible microscopic states than $A$, then almost every state we encounter in $B$ will not be the special $B^*$ needed for reversal.

That is why everyday experience has such a strong direction.

---

## 16. What About Friction?

There is another useful distinction.

At the macroscopic level we often write equations such as

$$
m\ddot{x}=-\gamma\dot{x}.
$$

The friction term depends on velocity.

Under time reversal,

$$
\dot{x}\rightarrow-\dot{x},
$$

so the friction term changes sign.

The effective equation therefore does not look time-reversal symmetric.

But friction itself can emerge from microscopic interactions that, to a good approximation, are reversible.

The apparent lost mechanical energy has not disappeared.

It has been distributed into many microscopic degrees of freedom:

$$
\text{organized motion}
\rightarrow
\text{molecular vibrations, collisions, heat, etc.}
$$

When we stop tracking all those microscopic variables and describe only the macroscopic object, the process looks irreversible.

This gives another way to understand why coarse-graining is so important.

---

## 17. Microscopic Information Becomes Hidden in Correlations

Suppose a moving block slows because of friction.

Initially, much of its energy is organized:

$$
E_{\text{organized}}
=
\frac12Mv^2.
$$

Afterward, that energy is distributed across enormous numbers of microscopic motions.

The total microscopic evolution may preserve information in extremely complicated correlations, but macroscopically we no longer track those correlations.

We simply say:

$$
\text{mechanical energy}\rightarrow\text{heat}.
$$

Recovering the original motion would require an incredibly coordinated fluctuation:

$$
\text{random thermal motion}
\rightarrow
\text{coherent macroscopic motion}.
$$

Again, microscopic physics does not necessarily make the reverse trajectory impossible.

It makes it extraordinarily special.

---

## 18. Entropy Connects the Microscopic and Macroscopic Worlds

We can now see why entropy occupies such a central position in physics.

At the microscopic level, we have

$$
(\mathbf r_i,\mathbf p_i)
$$

for enormous numbers of particles.

At the macroscopic level, we describe systems using a small number of variables:

$$
P,\quad V,\quad T,\quad E,\quad M,\ldots
$$

Entropy helps connect these two descriptions.

Very schematically,

$$
\boxed{
\text{microscopic configurations}
\rightarrow
\text{macrostates}
\rightarrow
\text{statistical weight}
\rightarrow
\text{entropy}
}
$$

The second law then emerges as a statement about overwhelmingly typical macroscopic evolution:

$$
\boxed{\Delta S\geq0}
$$

for an isolated system in the thermodynamic description.

Equilibrium corresponds to the overwhelmingly dominant macrostate compatible with the macroscopic constraints.

---

## 19. Fluctuations Do Not Disappear

Equilibrium does not mean that every microscopic quantity stops changing.

Quite the opposite.

Particles continue moving and colliding.

Local density fluctuates.

Energy fluctuates between subsystems.

Spins fluctuate.

Molecules continually rearrange.

What becomes stable are macroscopic averages.

For large $N$, relative fluctuations often become small. In many ordinary situations one finds scaling such as

$$
\frac{\sigma_A}{\langle A\rangle}
\sim
\frac{1}{\sqrt N}.
$$

So when

$$
N\sim10^{23},
$$

the microscopic system remains extremely active while the macroscopic state looks almost perfectly stable.

This is another reason the macroscopic world can appear deterministic despite its statistical microscopic foundation.

---

## 20. The Arrow of Time

We finally arrive at something surprisingly profound.

Our everyday experience has a direction.

We remember the past, not the future.

Glasses break but do not spontaneously reconstruct.

Perfume spreads through a room but does not spontaneously return to its bottle.

Hot and cold objects approach thermal equilibrium but do not ordinarily separate themselves again into hotter and colder regions.

These processes share a statistical direction:

$$
\boxed{
\text{low entropy}
\rightarrow
\text{high entropy}.
}
$$

This is called the **thermodynamic arrow of time**.

At the microscopic level, many familiar dynamical laws allow time-reversed trajectories.

At the macroscopic level, the enormous imbalance in the number of microscopic configurations produces a strong directionality.

So the arrow of time we experience is deeply connected to statistics.

---

## 21. But There Is Still One Deeper Question

Statistical mechanics explains why, **given a low-entropy state**, systems overwhelmingly tend toward higher entropy.

But this immediately creates another question.

Why did we start with low entropy?

If equilibrium occupies such an enormous fraction of available phase space, why was the universe not already in equilibrium?

This leads to one of the deepest questions in statistical mechanics and cosmology:

$$
\boxed{
\text{Why did the early universe have such low entropy?}
}
$$

The statistical argument explains the direction of evolution once an appropriate low-entropy boundary condition is given.

It does not, by itself, fully explain why the universe had that boundary condition.

So the humble question

> "Why doesn't a broken glass rebuild itself?"

eventually leads all the way to questions about the initial state of the universe.

---

## 22. The Complete Picture

The chain of reasoning can now be summarized:

$$
\text{microscopic equations}
$$

$$
\downarrow
$$

$$
\text{time-reversal symmetry}
$$

$$
\downarrow
$$

$$
\text{many microscopic trajectories are mechanically possible}
$$

$$
\downarrow
$$

$$
\text{we observe only coarse macroscopic variables}
$$

$$
\downarrow
$$

$$
\text{many microstates correspond to each macrostate}
$$

$$
\downarrow
$$

$$
S=k_B\ln\Omega
$$

$$
\downarrow
$$

$$
\text{high-entropy macrostates occupy overwhelmingly more phase space}
$$

$$
\downarrow
$$

$$
\text{low entropy}\rightarrow\text{high entropy is overwhelmingly typical}
$$

$$
\downarrow
$$

$$
\boxed{\text{macroscopic irreversibility}}
$$

$$
\downarrow
$$

$$
\boxed{\text{thermodynamic arrow of time}}.
$$

The most important realization for me is that **irreversible does not necessarily mean that the reverse microscopic trajectory is forbidden**.

Instead, for many thermodynamic processes it means that the reverse evolution requires an extraordinarily special microscopic state.

A shattered glass reconstructing itself is not difficult because the atoms have forgotten how to move backward.

It is difficult because among the astronomical number of microscopic states that look to us like "a broken glass," an unbelievably tiny subset contains exactly the correlations required to produce

$$
\text{broken glass}
\rightarrow
\text{intact glass}.
$$

That is the bridge from microscopic mechanics to macroscopic thermodynamics.

And it is why probability is not merely an inconvenience caused by our ignorance. With roughly $10^{23}$ interacting particles, statistics itself becomes powerful enough to generate remarkably robust macroscopic laws.
