#!/usr/bin/env python3
"""The code is nearly identical to wait_n
except task_wait_random is being called."""
import asyncio
from typing import List
task_wait_randon = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Take the code from wait_n and alter
    it into a new function task_wait_n."""
    tasks = [task_wait_randon(max_delay) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays
