import React from "react";
import CardGroup from "../CardGroup";
import Card from "../Card";
import Button from "../Button";

const ContentSection = props => {
  return (
    <div className="content-section">
      {}
      {props.schedule &&
        props.schedule.map((a, i) => {
          const todaysDate = {
            zero: a.zero,
            today: a.today,
            nth: a.nth,
            day: a.day
          };

          return (
            <>
              <CardGroup key={i} todaysDate={todaysDate}>
                {a.meeting.map((b, i) => (
                  <Card
                    key={i}
                    cardContainerActive={b.active ? b.active : null}
                  >
                    <span className="content-time">{b.time}</span>
                    <div
                      className="content-editable"
                      placeholder="placeholder"
                      style={{
                        outline: "none",
                        padding: "1rem 0",
                        color: b.active ? "#fff" : "#989898"
                      }}
                      contentEditable
                    >
                      {/* {b.content} */}
                    </div>
                    <Button>
                      <i class="fas fa-paper-plane"></i> +
                    </Button>
                  </Card>
                ))}
              </CardGroup>
            </>
          );
        })}
    </div>
  );
};

export default ContentSection;
