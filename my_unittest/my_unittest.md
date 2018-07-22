# unittest模块
主要概念
- test case 测试用例
- test suite 测试集合
- test runner 测试用例执行者
- test fixture 测试环境的创建销毁

##  测试用例设计
- class TestMathFunc(unittest.TestCase): 创建单元测试类，继承测试用例类
- 测试方法的函数以 test_ 开头，否则不被识别
- 方法文档可以在输出结果展示
- 使用断言方法判断是否符合预计结果
- 使用装饰器跳过某个测试用例@unittest.skip("I don't want to run this case.")
- 使用pycharm运行单元测试
或使用TestSuite的addTests()方法管理测试用例运行逻辑

# skip装饰器跳过测试用例 
skip装饰器一共有三个 
unittest.skip(reason)、
unittest.skipIf(condition, reason)、
unittest.skipUnless(condition, reason)，
skip无条件跳过，skipIf当condition为True时跳过，
skipUnless当condition为False时跳过。
注：reason 跳过理由
# 断言方法
- assertEqual(3, add(1, 2)) 函数结果等于假设值
- assertEqual(3, add(2, 2)) 函数结果不等于假设值
- self.assertTrue(is_even(5)) 函数返回结果为真
- self.assertFalse(is_even(5)) 函数返回结果为假
- with self.assertRaises(TypeError): is_even('a') 函数引发了预设的错误类型
- 更多断言方法参考[参考官网文档](https://docs.python.org/3.3/library/unittest.html#module-unittest)
# 环境创建与销毁
- def setUp(self):
单元测试中的每个测试用例开始时调用一次
- def tearDown(self):
单元测试中的每个测试用例结束时调用一次
- @classmethod def setUpClass(cls):
单元测试中开始时调用一次
- @classmethod def tearDownClass(cls):
单元测试中结束时调用一次

## 测试调度方法
### pycharm图形化工具运行测试用例（推荐）
[pycharm 单元测试文档](https://www.jetbrains.com/help/pycharm/quick-start-guide.html#test1)
[pycharm-统计信息](https://www.jetbrains.com/help/pycharm/viewing-and-exploring-test-results.html)
- 使用python tests 工具进行测试，详细输出看左侧的记录
- 不需要verbosity参数，直接看左侧统计记录
- 点击代码中序号左侧的运行按钮运行测试用例
- 可直接运行模块下的所有单元测试，不需要具体到单元测试类 Unittests for test_demo

### 使用python脚本运行测试用例（仅在有与外部沟通时使用）
- 参数 verbosity=2 显示详细信息
- 参考代码
test_manager.py

