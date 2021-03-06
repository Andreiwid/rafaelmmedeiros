import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import LoadingComponent from "../../../../app/layout/LoadingComponent";
import GrupoDetailsHeader from "./GrupoDetailsHeader";
import GrupoDetailsInfo from "./GrupoDetailsInfo";
import GrupoDetailsEstudos from "./GrupoDetailsEstudos";
import { RootStoreContext } from "../../../../app/stores/rootStore";

interface DetailParams {
  id: string;
}

const GrupoDetails: React.FC<RouteComponentProps<DetailParams>> = ({
  match,
  history
}) => {
  const rootStore = useContext(RootStoreContext);
  const { grupo, loadGrupo, loadingStart } = rootStore.grupoStore;

  useEffect(() => {
    loadGrupo(match.params.id);
  }, [loadGrupo, match.params.id, history]);

  if (loadingStart) return <LoadingComponent content="Carregando Grupo..." />;

  if (!grupo) return <h2>Grupo NOT FOOOOUND!!</h2>;

  return (
    <Grid>
      <Grid.Column>
        <GrupoDetailsHeader grupo={grupo} />
        <GrupoDetailsInfo />
        <GrupoDetailsEstudos />
      </Grid.Column>
    </Grid>
  );
};

export default observer(GrupoDetails);