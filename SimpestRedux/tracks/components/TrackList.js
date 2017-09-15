import React, {Component, PropTypes} from 'react';
import { FlatList } from "react-native";
import {connect} from 'react-redux';
import { Text
    , Container
    , Content
    , ListItem
    , Left
    , Body
    , Icon
    , Right
    , Title } from "native-base";

export default class TrackList extends Component {
  static propTypes = {
    tracks: PropTypes.array
  }

  static defaultProps = {
    tracks: []
  }

  render() {
    return (
        <Container>
            <Content>
                <Text>Xin chao cac ban</Text>
                <Text>Size = {this.props.tracks.length}</Text>
                <FlatList
                    data={this.props.tracks}
                    renderItem={(item) => {
                        <ListItem style={{ marginLeft: 0 }}>
                        <Body>
                            <Text>{item.title}</Text>
                        </Body>
                        </ListItem>
                    }}
                />
            </Content>
        </Container>
    
    )
  }
}