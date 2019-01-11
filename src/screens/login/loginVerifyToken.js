import React from "react";
import { Form, Text, Spinner } from 'native-base';
import { connect } from 'react-redux';

import { appActions } from '../../static/actionsIndex';
import pageStyle from './loginStyle';

class VerifyToken extends React.Component {
    componentDidMount() {
        this.props.dispatch(appActions.verifyCurrentToken.invoke());
    }

    render () {
        return(
            <Form style={{ justifyContent: "center", alignItems: 'center', alignSelf: 'center', paddingTop: 80 }}>
                <Spinner color='red' />
                <Text style={[pageStyle.defaultTextColor]}>Validating User Info</Text>
            </Form>
        );
    }
}

export default connect()(VerifyToken);
