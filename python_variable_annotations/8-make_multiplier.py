#!/usr/bin/env python3
"""Write a type-annotated function make_multiplier that takes a float
multiplier as argument and returns a function that multiplies a float
by multiplier."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function multiplying a float by multiplier"""
    def multiplies(value: float) -> float:
        """returns a float multiplied by multiplier"""
        return value * multiplier
    return multiplies
