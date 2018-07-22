import unittest
from my_unittest.test_demo import TestMyFunction

if __name__ == '__main__':
    suite = unittest.TestSuite()
    tests = [TestMyFunction("test_add"), TestMyFunction("test_is_even"), TestMyFunction("test_not_int")]
    suite.addTests(tests)
    runner = unittest.TextTestRunner(verbosity=2)
    runner.run(suite)
