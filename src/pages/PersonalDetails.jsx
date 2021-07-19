import { Form, Input, Button, Checkbox } from 'antd';
import { useHistory } from "react-router-dom";

function PersonalDetails(props) {
const history = useHistory()
  // const { getFieldDecorator } = this.props.form;
  const onFinish = (values) => {
    debugger
    props.details(values);
    history.push('/account')

  };
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
        label="First name"
        name="firstName"
        rules={[{ required: true, message: 'Please input your first name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: 'Please input your last name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Address"
        name="address"
        rules={[{ required: true, message: 'Please input your address!' }]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        label="Zip Code"
        name="zipCode"
        rules={[{ required: true,pattern: new RegExp(/^[0-9]+$/) },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Pin "
        name="pin"
        rules={[{ required: true, pattern: new RegExp(/^[0-9]+$/)},
        {
          validator(_, value) {
            if (value.length > 10) {
              return Promise.resolve();
            }
            return Promise.reject('Please enter 10 digit Number!');
          },
        },]}
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

export default PersonalDetails;

