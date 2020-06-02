import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Bio,
  Name,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      setOptions: PropTypes.func,
    }).isRequired,
  };

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
    const { route } = this.props;
    const response = await api.get(`/users/${route.params.user.login}/starred`);
    console.tron.log(response.data);
    console.tron.log(`route.params.user.login: ${route.params.user.login}`);
    console.tron.log(`componentDidMount: ${new Date().getTime().toString()}`);

    this.setState({ stars: response.data });
  }

  render() {
    const { route } = this.props;
    const { stars } = this.state;
    const { user } = route.params;

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={(star) => String(star.id)}
          renderItem={({ item }) => (
            <Starred>
              <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      </Container>
    );
  }
}
