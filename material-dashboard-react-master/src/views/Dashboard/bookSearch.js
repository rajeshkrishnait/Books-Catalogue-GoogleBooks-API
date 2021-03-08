import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function AltCard() {
  const classes = useStyles();
  const data = {
    name: [
      { quarter: 1, earnings: 13000 },
      { quarter: 2, earnings: 16500 },
      { quarter: 2, earnings: 16500 },
      { quarter: 2, earnings: 16500 },
    ],
    id: [1, 2, 3, 4],
  };
  return (
    <div className={classes.root}>
      {data.id.map((elem) => (
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          {data.name.map((elem) => (
            <Grid item xs={6} key={data.name.indexOf(elem)}>
              <Card>
                <CardHeader
                  title={`quarter : ${elem.quarter}`}
                  subheader={`earnings : ${elem.earnings}`}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Hello World
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
}
