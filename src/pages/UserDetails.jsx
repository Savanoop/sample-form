import { Card } from 'antd';

function UserDetails(props) {
  debugger
  return (
    <div className="site-card-border-less-wrapper" style={{padding:'20px'}}>
      <Card title="User Details" bordered={false} style={{backgroundColor:'whitesmoke', textAlign: "center",width: "75%",marginLeft: "150px" }}>
        <p>FirstName: {props.userDetails && props.userDetails.firstName}</p>
        <p>Last Name: {props.userDetails && props.userDetails.lastName}</p>
        <p>Address: {props.userDetails && props.userDetails.address}</p>
        <p>Zip Code: {props.userDetails && props.userDetails.zipCode}</p>
        <p>Pin: {props.userDetails && props.userDetails.pin}</p>
        <p>Bank Name: {props.userDetails && props.userDetails.bankName}</p>
        <p>Account Number: {props.userDetails && props.userDetails.accountNumber}</p>
        <p>Branch: {props.userDetails && props.userDetails.branch}</p>
        <p>IFSC Code: {props.userDetails && props.userDetails.ifscCode}</p>


      </Card>
    </div>
  )
}

export default UserDetails;