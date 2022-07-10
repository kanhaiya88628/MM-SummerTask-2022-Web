import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Article.css";

const Article = () => {
  return (
    <div className="main-article">
      <Container>
        <article>
            <div>
                <Typography variant="h3">TATA IPL 2022, Eliminator: LSG Vs RCB - Match Report</Typography>
            </div>
          <div>
            <p>
              The Royal Challengers Bangalore (RCB) sealed their spot in
              Qualifier 2 of the TATA Indian Premier League (IPL) 2022 campaign
              with a 14-run win over the Lucknow Super Giants (LSG) on Wednesday
              at the Eden Gardens in Kolkata.
            </p>
          </div>
          <div>
            <p>
              Rajat Patidar’s incredible maiden IPL century and Josh Hazlewood’s
              crucial three-wicket haul powered RCB to a 14-run victory in a
              high-scoring thriller.
            </p>
          </div>
          <div>
            <p>
              Chasing a challenging target of 208, LSG lost Quinton de Kock’s
              wicket in the very first over after the opener was caught inside
              the circle off Mohammed Siraj’s bowling. Manan Vohra upped the
              scoring rate with two sixes before the right-handed batter was
              dismissed by Josh Hazlewood.
            </p>
          </div>
          <div>
            <p>
              LSG moved to 67-2 at the end of the powerplay after skipper KL
              Rahul smashed a four followed by two maximums against Siraj.
            </p>
          </div>
          <div>
            <p>
              Deepak Hooda joined the LSG skipper in the middle and the duo
              stitched a vital partnership for the third wicket to keep the side
              alive in the chase as they were placed at 89-2 at the halfway
              mark.
            </p>
          </div>
          <div>
            <p>
              Rahul reached his half-century in style with a maximum and
              maintained the scoring rate as LSG required 83 off the final six
              overs.
            </p>
          </div>
          <div>
            <p>
              LSG pacers added pressure with the new ball but opener Virat Kohli
              and Rajat Patidar batted steadily and moved RCB to 52/1 at the end
              of the powerplay. Patidar whacked three fours and a six in the 6th
              over, which produced 20 runs.
            </p>
          </div>
          <div>
            <p>
              RCB didn’t lose momentum as the next over produced 16 runs after
              Mahipal Lomror creamed consecutive fours. Bishnoi claimed his
              first wicket in the form of Lomror, who was caught inside the
              circle.
            </p>
          </div>
          <div>
            <p>
              The 200 was up for RCB after 34 runs were conceded in the final
              two overs courtesy an excellent striking display by the
              Patidar-Kartik duo as RCB posted 207/4 in the first innings.
            </p>
          </div>
          <div>
            <p>
              <strong>Brief Scores: Royal Challengers Bangalore</strong> 207/4
              (Rajat Patidar 112*, Dinesh Karthik 37*; Mohsin Khan 1/25){" "}
              <strong>beat Lucknow Super Giants</strong> 193/6 (KL Rahul 79,
              Deepak Hooda 45; Josh Hazlewood 3/43){" "}
              <strong>beat by 14 runs.</strong>
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default Article;
