var documenterSearchIndex = {"docs":
[{"location":"API/","page":"API","title":"API","text":"","category":"page"},{"location":"API/","page":"API","title":"API","text":"Modules = [EPGsim]","category":"page"},{"location":"API/#EPGsim.epgDephasing","page":"API","title":"EPGsim.epgDephasing","text":"epgDephasing(E::EPGStates, n=1) where T\n\nshifts the transverse dephasing states F corresponding to n dephasing-cycles.\n\n\n\n\n\n","category":"function"},{"location":"API/#EPGsim.epgRelaxation-Tuple{EPGStates, Any, Any, Any}","page":"API","title":"EPGsim.epgRelaxation","text":"epgRelaxation(E::EPGStates,t,T1, T2)\n\napplies relaxation matrices to a set of EPG states.\n\nArguments\n\nE::EPGStates\nt::AbstractFloat    - length of time interval\nT1::AbstractFloat   - T1\nT2::AbstractFloat   - T2\n\n\n\n\n\n","category":"method"},{"location":"API/#EPGsim.epgRotation","page":"API","title":"EPGsim.epgRotation","text":"epgRotation(E::EPGStates, alpha::Float64, phi::Float64=0.0)\n\napplies Bloch-rotation (<=> RF pulse) to a set of EPG states.\n\nArguments\n\nE::EPGStates`\nalpha::Float64           - flip angle of the RF pulse (rad)\nphi::Float64=0.0         - phase of the RF pulse (rad)\n\n\n\n\n\n","category":"function"},{"location":"API/#EPGsim.rfRotation","page":"API","title":"EPGsim.rfRotation","text":"rfRotation_AT(alpha, phi=0.)\n\nreturns the rotation matrix for a pulse with flip angle alpha and phase phi.\n\n\n\n\n\n","category":"function"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"EPG implementation that mimics the regular implementation from Julien Lamy in Sycomore","category":"page"},{"location":"regular/#Short-description","page":"Regular EPG ","title":"Short description","text":"","category":"section"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"Regular implementation use a constant positive or negative gradient dephasing. We use a vector Fp, Fn and Z to store the states.","category":"page"},{"location":"regular/#Initialization","page":"Regular EPG ","title":"Initialization","text":"","category":"section"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"EPG states are stored as a structure :","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"mutable struct EPGStates{T <: Real} \n  Fp::Vector{Complex{T}}\n  Fn::Vector{Complex{T}}\n  Z::Vector{Complex{T}}\nend","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"which can be initialized with default parameters Fp = 0, Fn = 0 and Z = 1 states using :","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"using EPGsim\nE = EPGStates()","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"or by :","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"E = EPGStates(0,0,1)","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"which convert any numbers of the same types in Vector{ComplexF64}","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"or directly by passing Vector{Complex{T}} where {T <: Real} which means it can accept a complex{dual} type :","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"T = ComplexF32\nE = EPGStates(T.([0.5+0.5im,1]),T.([0.5-0.5im,0]),T.([1,0]))","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"warning: Warning\nthe F+[1] and F-[1] states should be complex conjugate and imag(Z[1])=0 ","category":"page"},{"location":"regular/#EPG-simulation","page":"Regular EPG ","title":"EPG simulation","text":"","category":"section"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"3 functions are used to simulate a sequence :","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"epgDephasing\nepgRelaxation\nepgRotation","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"They take an EPGStates struct as first parameter.","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"E = EPGStates()\nE = epgRotation(E,deg2rad(60),0)\nE = epgDephasing(E,1)\nE = epgRotation(E,deg2rad(60),deg2rad(117))","category":"page"},{"location":"regular/#Accessing-states","page":"Regular EPG ","title":"Accessing states","text":"","category":"section"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"States can seen directly as a vector :","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"E.Fp","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"or by elements :","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"E.Fp[2]","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"getStates is also available to create a 3xN matrix where 3 corresponds to Fp,Fn,Z and N is the number of states.","category":"page"},{"location":"regular/","page":"Regular EPG ","title":"Regular EPG ","text":"getStates(E)","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = EPGsim","category":"page"},{"location":"#EPGsim","page":"Home","title":"EPGsim","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Extended Phase Graph simulation","category":"page"},{"location":"#Introduction","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"EPGsim is a Julia packet for magnetic resonance imaging signal simulation based on the Extended Phase Graph (EPG) concept. The principal aspect of this package was to make it compatible with Automatic Differentiation using ForwardDiff.jl in order to compute Cramér-Rao Lower Bound metrics which is used to optimized sequence protocol.","category":"page"},{"location":"","page":"Home","title":"Home","text":"note: Note\nEPGsim.jl is work in progress and in some parts not entirely optimized. The interface is susceptible to change between version","category":"page"},{"location":"#physics-concept","page":"Home","title":"physics concept","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Introduction to the physics concepts behing EPG as well as their usage can be found on the rad229 youtube channels by Brian Hargreaves and Daniel Ennis :","category":"page"},{"location":"","page":"Home","title":"Home","text":"Lecture-04A: Definition of the Extended Phase Graph Basis\nLecture-04B: Sequence Operations in the Extended Phase Graph Domain\nLecture-04C: Examples using Extended Phase Graphs","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This package is currently not registered.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Start julia and open the package mode by entering ]. Then enter","category":"page"},{"location":"","page":"Home","title":"Home","text":"add https://github.com/aTrotier/EPGsim.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"This will install EPGsim and all its dependencies. If you want to develop EPGsim itself you can checkout EPGsim by calling","category":"page"},{"location":"","page":"Home","title":"Home","text":"dev https://github.com/aTrotier/EPGsim.jl","category":"page"},{"location":"","page":"Home","title":"Home","text":"More information on how to develop a package can be found in the Julia documentation.","category":"page"},{"location":"#Tutorial","page":"Home","title":"Tutorial","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can find an example about simulation of a Multi-Echo Spin-Echo sequence and its derivation here","category":"page"},{"location":"AD/#Automatic-differentiation","page":"Automatic Differentiation","title":"Automatic differentiation","text":"","category":"section"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"This page shows how to use Automatic Differentiation in combination with an EPG simulation. ","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"The AD package tested is ForwardDiff.jl, maybe it works with others with some minor modification to the following code.","category":"page"},{"location":"AD/#Load-package","page":"Automatic Differentiation","title":"Load package","text":"","category":"section"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"using EPGsim, ForwardDiff, CairoMakie","category":"page"},{"location":"AD/#Building-signal-function","page":"Automatic Differentiation","title":"Building signal function","text":"","category":"section"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"function MESE_EPG(T2,T1,TE,ETL,delta)\n  T = eltype(complex(T2))\n  E = EPGStates([T(0.0)],[T(0.0)],[T(1.0)])\n  echo_vec = Vector{Complex{eltype(T2)}}()\n\n  E = epgRotation(E,pi/2*delta, pi/2)\n  # loop over refocusing-pulses\n  for i = 1:ETL\n    E = epgDephasing(E,1)\n    E = epgRelaxation(E,TE,T1,T2)\n    E  = epgRotation(E,pi*delta,0.0)\n    E  = epgDephasing(E,1)\n    push!(echo_vec,E.Fp[1])\n  end\n\n  return abs.(echo_vec)\nend;","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"warning: Specific types with AD\nForwardDiff use a specific type : Dual <: Real. The target function must be written generically enough to accept numbers of type T<:Real as input (or arrays of these numbers).We also need to create an EPGStates that is of that type. We need to force it to be complex :T = eltype(complex(T2))\nE = EPGStates([T(0.0)],[T(0.0)],[T(1.0)])","category":"page"},{"location":"AD/#Define-parameters-for-simulation-and-run-it","page":"Automatic Differentiation","title":"Define parameters for simulation and run it","text":"","category":"section"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"T2 = 60.0\nT1 = 1000.0\nTE = 7\nETL = 50\ndeltaB1 = 1\n\nTE_vec = range(TE,TE*ETL,ETL)\n\namp = MESE_EPG(T2,T1,TE,ETL,deltaB1)\nlines(TE_vec,abs.(amp),axis =(;title = \"MESE Signal\", xlabel=\"TE [ms]\"))","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"As expected, we get a standard T2 decaying exponential curve :","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"S(TE) = exp(-TET_2)","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"We can analytically derive the equation according to T_2 :","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"fracpartial Spartial T_2 = fracTET_2^2 exp(-TET_2)","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"which give the following curves:","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"df = TE_vec .* exp.(-TE_vec./T2)./(T2^2) \n\nlines(TE_vec,abs.(df),axis =(;title = \"dS/dT2\", xlabel=\"TE [ms]\"))","category":"page"},{"location":"AD/#Find-the-derivative-with-Automatic-Differentiation","page":"Automatic Differentiation","title":"Find the derivative with Automatic Differentiation","text":"","category":"section"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"Because we want to obtain the derivate at multiple time points (TE), we will use ForwardDiff.jacobian :","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"j = ForwardDiff.jacobian(x -> MESE_EPG(x,T1,TE,ETL,deltaB1),[T2])","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"Let's compare it to the analytical equation :","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"f=Figure()\nax = Axis(f[1,1],title =\"Analytic vs Automatic Differentiation\")\n\nlines!(ax,TE_vec,abs.(df),label = \"Analytic Differentiation\",linewidth=3)\nlines!(ax,TE_vec,abs.(vec(j)),label = \"Automatic Differentiation\",linestyle=:dash,linewidth=3)\naxislegend(ax)\nf","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"Of course, in that case we don't really need the AD possibility. But if we reduce the B1+ value the equation becomes complicated enough and might lead to error during derivation if we don't use AD.","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"deltaB1 = 0.8\n\namp = MESE_EPG(T2,T1,TE,ETL,deltaB1)\nj = ForwardDiff.jacobian(x -> MESE_EPG(x,T1,TE,ETL,deltaB1),[T2])\n\nf = Figure()\nax = Axis(f[1,1], title = \"MESE signal with B1 = $(deltaB1)\",xlabel=\"TE [ms]\")\nlines!(ax,TE_vec,abs.(amp))\nax = Axis(f[1,2], title = \"AD of MESE signal with B1 = $(deltaB1)\",xlabel=\"TE [ms]\")\nlines!(ax,TE_vec,df)\nf","category":"page"},{"location":"AD/#Reproducibility","page":"Automatic Differentiation","title":"Reproducibility","text":"","category":"section"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"This page was generated with the following version of Julia:","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"using InteractiveUtils\nio = IOBuffer();\nversioninfo(io);\nsplit(String(take!(io)), '\\n')","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"And with the following package versions","category":"page"},{"location":"AD/","page":"Automatic Differentiation","title":"Automatic Differentiation","text":"import Pkg; Pkg.status()","category":"page"}]
}
