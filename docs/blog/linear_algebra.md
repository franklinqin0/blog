---
title: Linear Algebra
date: 2021-04-15
categories:
  - study
tags:
  - tech
publish: false
---

<!-- more -->

_conjugate transpose_: $A^{\dagger} = (A^{\star})^{T}$

_Hermitian_: $A^{\dagger} = A$

_normal_: $A A^{\dagger} = A^{\dagger} A$

_unitary_: $A^{-1} = A^{\dagger}$ or $A A^{\dagger} = A^{\dagger} A = I$

_orthonormal_: each vector is a unit vector, and distinct vectors in the set form an orthogonal basis $q_1, \cdots q_n$  
$q_{i}^{T} q_j  = \sigma_{ij}$

An _orthogonal matrix_ is a square matrix whose rows are mutually **orthonormal** and whose columns are mutually orthonormal:  
$A A^{T} = A^{T} A = I$

_Spectral decomposition_: any normal operator $M$ on a vector space V is diagonal with respect to some orthonormal basis for V . Conversely, any diagonalizable operator is normal.

_Spectral Theorem_: a normal matrix is Hermitian iff it has real eigenvalues.

in a real symmetrix matrix, eigenvectors of distinct eigenvalues are orthogonal

## Orthogonal Vectors & Subspaces

$A^{T} A$ is symmetric  
$Nul(A^{T} A) = Nul(A)$  
rank of $A^{T} A =$ rank of $A$  
$A^{T} A$ is invertible $\longleftrightarrow$ $A$ is invertible

$v$ in $Nul(A^T)$ = $v \perp Col(A)$

$Ax = b$ may have no solution, instead solve $A \hat{x} = p$  
_Projection matrix_: symmetric($P^{T} = P$) and effective only once($P^2 = P$)  
project onto $A$'s column space: $P = A(A^T A)^{-1} A^T$  
$p = A\hat{x} = Pb = A(A^T A)^{-1} A^T b$  
Least Squares solution: $A^{T} A x = A^{T} b \longrightarrow \hat{x} = (A^T A)^{-1} A^{T} b$

Every symmetric matrix is a linear combination of orthogonal projection matrices.

For a symmetric matrix, signs of pivots are the same as signs of eigenvalues.

Positive definite matrix is symmetric. All eigenvalues are positive. All pivots are positive. All subdeterminants are positive.

product of pivots = products of eigenvalues?

If $A$ has independent columns, then $A^{T} A$ is invertible.

Pythogarean theorem: if $x$ and $y$ are orthogonal ($x^T y = 0$), then  
$\| x \|^2 + \| y \|^2 = \| x + y \|^2$

The $0$ vector is orthogonal to every vector.

The _null space_ of A contains all those vectors $x \in R^n$ s.t. $Ax = 0$  
$\text{Nul}(A) = \{ x \in R^n : Ax = 0 \}$

The _column space_ of $A$ is the subspace of $R^m$ spanned by the columns of $A$  
$Col(A) = \text{Span}(a_1, \cdots a_n)$  
in other words, $\{b: b = Ax \text{ for some } x \in R^n\}$

$Row(A) = col(A^{T})$

rank $= \text{dim }Row(A) = \text{dim }Col(A)$  
A($n \times n$ matrix) is full rank $\longleftrightarrow$ $\text{dim }Col(A) = n$ $\longleftrightarrow$ $\text{dim }Nul(A) = 0$ $\longleftrightarrow$ $A$ is invertible

Subspace $S$ is orthogonal to subspace $T$: every vector in $S$ is orthogonal to every vector in $T$.

Row space and null space are orthogonal complements in $R^n$  
$\rightarrow$ Row space contains all vectors $\perp$ null space  
Row space is orthogonal to null space of $A$

Column space and null space of $A^T$ are orthogonal complements in $R^m$  
$\rightarrow$ Column space contains all vectors $\perp$ null space of $A^T$  
Column space is orthogonal to null space of $A^T$

(Singular value decomposition) Let $A$ be a square matrix. Then there exist unitary matrices $U$ and $V$, and a diagonal matrix $D$ with non-negative entries such that  
$A = UDV$

The diagonal elements of $D$ are called the singular values of $A$.

## Questions

EPR  
intro p19 end
