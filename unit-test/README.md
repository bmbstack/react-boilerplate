`test/` directory use to save test-case file. 

We can type `yarn run test:app` to start testing in termial.

and example is

```javascript
import { expect } from 'chai';
import httpProxy from 'path/to/httpProxy';

import { shallow } from 'enzyme';
import React from 'react';
import Container from 'path/to/Container';

describe('Test Group Name', () => {
    let store;

    beforeEach(() => {
		// 每次开始一个用例前, 先初始化store实例.
    	store = new DashboardStore();
    });

    it('Test Case Name', () => {
    	// 断言
		expect(store.a).to.equal('abc');
    });

    it('Test Case Name',async (done) => {
    	// 异步请求测试
		await store.fetch();
		expect(store.a).to.equal('abc');
		done();
    });
    
    // 因为界面变动频繁, 不建议每个组件都写.
    it('Test Case Name', () => {
    	expect(shallow(<Container />).type()).to.equal('div');
    });
});
```

for [more about mocha](http://mochajs.org/#usage);
for [more about chai](http://chaijs.com/api/bdd/#method_true);
