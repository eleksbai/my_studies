import unittest

from my_unittest.my_function import add, is_even
from my_unittest.my_dict import Dict


class TestDict(unittest.TestCase):
    def setUp(self):
        print('-------------------------')
        print('测试用例开始')

    def tearDown(self):
        print('测试用例结束')
        print('-------------------------\n')

    @unittest.skip("我要跳过这个测试用例")
    def test_init(self):
        print('测试初始化')
        d = Dict(a=1, b='test')
        self.assertEqual(d.a, 1)
        self.assertEqual(d.b, 'test')
        self.assertTrue(isinstance(d, dict))

    def test_key(self):
        print('测试键')
        d = Dict()
        d['key'] = 'value'
        self.assertEqual(d.key, 'value')

    def test_attr(self):
        print('测试属性')
        d = Dict()
        d.key = 'value'
        self.assertTrue('key' in d)
        self.assertEqual(d['key'], 'value')

    def test_keyerror(self):
        print('测试引发键异常')
        d = Dict()
        with self.assertRaises(KeyError):
            value = d['empty']

    def test_attrerror(self):
        print('测试引发属性异常')
        d = Dict()
        with self.assertRaises(AttributeError):
            value = d.empty


class TestMyFunction(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        print("此类方法只在整个单元测试开始时调用一次")
        print()

    @classmethod
    def tearDownClass(cls):
        print("此类方法只在整个单元测试结束时调用一次")

    def test_add(self):
        """测试加法"""
        self.assertEqual(3, add(1, 2))
        self.assertNotEqual(3, add(2, 2))

    def test_is_even(self):
        """测试偶数判断"""
        self.assertTrue(is_even(6))
        self.assertFalse(is_even(5))

    def test_not_int(self):
        """测试偶数判断传入字符串引发类型错误"""
        # with
        with self.assertRaises(TypeError):
            is_even('w')
