import React from 'react';
import { Image, ImageBackground } from 'react-native';
import { Container, Content, Text, List, ListItem } from 'native-base';

const routes = ['_DASHBOARD_', '_MEMBERS_', '_PROJECTS_', '_SETTING_'];

class SideBar extends React.Component {
  render() {
    return (

          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
    );
  }
}

export default SideBar
