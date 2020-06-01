import React, { Component } from 'react';
import { View } from 'react-native';
import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  constructor(props) {
    super(props);
    const { route, navigation } = props;

    navigation.setOptions({
      title: `${route.params.user.name}`,
    });
  }

  state = {
    stars: [],
  };

  async componentDidMount() {
    const { route, navigation } = this.props;
    const response = await api.get(`/users/${route.params.user.login}/starred`);
    console.tron.log(response.data);
    console.tron.log(`route.params.user.login: ${route.params.user.login}`);
    console.tron.log(`componentDidMount: ${new Date().getTime().toString()}`);
  }

  render() {
    return <View />;
  }
}
