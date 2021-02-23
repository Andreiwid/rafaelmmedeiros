import { format } from "date-fns";
import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, Header, Progress } from "semantic-ui-react";
import { IChapter } from "../../../../../app/models/appTrainer/domain/chapter";

const TrainerChapterWeekDaysItem: React.FC<{ chapter: IChapter }> = ({ chapter }) => {
  let hours = (chapter.totalTime / 60).toFixed(1);

  return (
    <Grid.Row>
      <Header>{format(chapter.day, "eee do MMM")}</Header>
      <Progress size="large" percent={chapter.differenceToBestDay} progress indicating>
        {hours} /H
      </Progress>
    </Grid.Row>
  );
};

export default observer(TrainerChapterWeekDaysItem);
