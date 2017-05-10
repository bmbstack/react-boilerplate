import Mock from 'mockjs';
import { WEB_API } from '../src/constants/api';

Mock.mock(WEB_API.EXAMPLE_MOCK_URL, {
    code: 200,
    msg: 'Success',
    data: [
        { a: 1, b: 2 },
        { 'a|1-3': 1, 'b|5-9': 5 }
    ]
});
