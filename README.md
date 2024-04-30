# Ray Tracer 
## Created for CS4620, Spring 2024

# Terminology

## Vertex 
A position in space

## Dot product

The dot product of two vectors $(a,b,c)$ and $(d,e,f)$ is $a\cdot d+b\cdot e + c\cdot f$.

## Cross product

The cross product of two vectors $(a,b,c)$ and $(d,e,f)$ is 
$( 
  (b\cdot f-c\cdot e),
  (c\cdot d-a\cdot f),
  (a\cdot e-b\cdot d)
)$

What is the cross product of $(1,2,3)$ and $(4,5,6)$?

x = 2*6-3*5=12-15=-3
y = 3*4-1*6=12-6=6
z = 1*5-2*4=5-8=-3
(-6,6,-3)

## Vector
A direction in space

What is the vector from $(1,1)$ to $(2,2)$?
(2,2)-(1,1)=(1,1)

Vector length of (1,1)=$\sqrt(1^2+1^2) = \sqrt(2) $

Dividing by length, the normalized vector is:
$(1/\sqrt(2),1/\sqrt(2))$




## Normalized Vector (Unit Vector)
A vector is length 1.
How? Divide all the components by the vector length.

A normalized vector is denoted as $||v||$

Given vector $(1,1,1)$, what is the normalized vector?

Length = $\sqrt(1^2+1^2+1^2)$=$\sqrt(3)$
Normalized vector = $(1/\sqrt(3),1/\sqrt(3),1/\sqrt(3))$

Given vector $(3,0,-4)$, what is the normalized vector?

Length of $(3,0,-4)$=$\sqrt(3^2+0^2+4^2)$=$\sqrt(9+0+16)=\sqrt(25)=5$

Normalized vector=$(3/5,0/5,-4/5)=(3/5,0,4/5)$


# Normal/Perpendicular/The Orthogonal Vector
$v\cdot u=0$ iff they are perpendicular, etc.

One way to do this is to take $(a,b,c)$ and give $(-b, a, 0)$. However, this will not work if both a and b are 0 (see the Fuzzy Ball Theorem). In that case, you can swizzle in another way, for example $(0, -c, b)$.

Find a perdendicular vector to $(-.5, -.5, 3)$

Swizzling a and b and negating b and set c to 0: $(.5,-.5,3)$

Dot producting with the original vector $\rightarrow$ $(-.5,-.5,3)\cdot(.5,-.5,0)=-.25+.25+0)=0$

Are vectors $(2,3,4)$ and $(0, -4, 3)$ perpendicular?

Take the dot product:

$2*0+3*-4+4*3=0-12+12=0$ Yes, they are perpendicular.



Are vectors $(0,0,4)$ and $(0,0,5)$ perpendicular? Dot product is not 0!



# Ray
An infinite line that has an orgin, but no end.

$r_o+r_d\cdot T$ or $r_x+r_dx\cdot T+r_y+r_dy\cdot T+r_z+r_dz\cdot T$

Given a ray with origin $(0,0,100)$ and a direction of $(1,2,3)$, what is the position of the ray after $T=3.2$?

$(0+1*3.2,0+2*3.2,100+3*3.2)=(3.2,6.4,109.6)$



# Infinite Line
$Ax+By+Cz+D=0$

$(A,B,C)\cdot (x,y,z)$

$D = -(A,B,C)\cdot (x,y,z)$

Find the inifinite line that goes through theses two points:

$(1,-2,-3), (-4, 5, 6)$


# Infinite Plane
$Ax+By+Cz+D=0$

Find the infinite plane that lies along the triangle defined by the points:

$(0,0,0), (1,0,0), (0,1,0)$

