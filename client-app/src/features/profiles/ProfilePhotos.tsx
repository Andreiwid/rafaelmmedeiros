import React, { useContext } from "react";
import { Tab, Header, Card, Image } from "semantic-ui-react";
import { RootStoreContext } from "../../app/stores/rootStore";

const ProfilePhotos = () => {
  const rooStore = useContext(RootStoreContext);
  const { profile } = rooStore.profileStore;
  return (
    <Tab.Pane>
      <Header icon="image" content="Photos" />
      <Card.Group itemsPerRow={5}>
        {profile &&
          profile?.photos.map((photo) => (
            <Card key={photo.id}>
              <Image src={photo.url} />
            </Card>
          ))}
      </Card.Group>
    </Tab.Pane>
  );
};

export default ProfilePhotos;