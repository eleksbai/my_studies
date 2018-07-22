def add(a, b):
    return a + b


def is_even(a):
    """0为假，1为真"""
    if not isinstance(a, int):
        raise TypeError('a is not int')
    return not bool(a % 2)
