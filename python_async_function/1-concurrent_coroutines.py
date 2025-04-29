#!/usr/bin/env python3
"""Contains asynchronous coroutine wait_n"""
import asyncio
import typing
from bisect import insort
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> typing.List[float]:
    """Executes multiple coroutines at the same time
    and returns a list of execution times in ascending order.
    
    Args: n (int): Number of times to call wait_random.
    max_delay (int): Maximum delay for each call to wait_random.
    
    Returns: List[float]: List of all delay values in ascending order."""
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        insort(delays, delay)
    return delays
