import { Form, Input, Button } from 'antd';
import { useHistory } from "react-router-dom";

function AccountDetails(props) {
  const history = useHistory()

  const onFinish = (values) => {
    props.account(values)
    history.push('details')

  }
  debugger
  return (
    <div style={{padding:'30px'}}>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Bank name"
        name="bankName"
        rules={[{ required: true, message: 'Please input your Bank name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Account number"
        name="accountNumber"
        rules={[{ required: true, pattern: new RegExp(/^[0-9]+$/)} ,
        {
          validator(_, value) {
            if (value.length > 12) {
              return Promise.resolve();
            }
            return Promise.reject('Please enter 12 digit Number!');
          },
        }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Branch"
        name="branch"
        rules={[{ required: true, message: 'Please input your Branch!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="IFSC code "
        name="ifscCode"
        rules={[{ required: true, message: 'Please input your IFSC code !' }]}
      >
        <Input />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  )
}

export default AccountDetails;

