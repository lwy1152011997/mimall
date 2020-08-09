https://blog.csdn.net/weixin_44303465/article/details/89523719
https://blog.csdn.net/github_37216944/article/details/79530510

+ cookie机制和session机制的区别
  cookie机制采用的是在客户端保持状态的方案，而session机制采用的是在服务器端保持状态的方案
  由于在服务器端保持状态的方案在客户端也需要保存一个标识，所以session机制可能需要借助于cookie机制来达到保存标识的目的
  
+ 会话cookie 和 持久cookie的区别
   - 如果不设置过期时间，则表示这个cookie生命周期为浏览器会话期间存在，只要关闭浏览器窗口，cookie就消失了
     这种生命期为浏览会话期的cookie被称为会话cookie。会话cookie一般不保存在硬盘上而是保存在内存里。
  
   - 如果设置了过期时间，浏览器就会把cookie保存到硬盘上，关闭后再次打开浏览器，这些cookie依然有效直到超过设定的过期时间。
     存储在硬盘上的cookie可以在不同的浏览器窗口进程上进行共享
   
+  