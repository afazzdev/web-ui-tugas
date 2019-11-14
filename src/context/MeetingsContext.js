import React, { createContext, useReducer } from "react";

export const MeetingsContext = createContext();

const initialState = {
  schedule: [
    {
      date: "Tuesday122019",
      day: "Tuesday",
      nth: "th",
      today: 12,
      zero: "",
      meeting: [
        {
          time: "10:00 AM - 11:00 AM",
          active: true
        },
        {
          time: "10:00 AM - 11:00 AM"
          // active: true
        },
        {
          time: "10:00 AM - 11:00 AM",
          active: true
        }
      ]
    },
    {
      date: "Tuesday122019",
      day: "Tuesday",
      nth: "th",
      today: 12,
      zero: "",
      meeting: [
        {
          time: "10:00 AM - 11:00 AM"
          // active: true
        },
        {
          time: "10:00 AM - 11:00 AM",
          active: true
        },
        {
          time: "10:00 AM - 11:00 AM" // active: true
        }
      ]
    },
    {
      date: "Tuesday122019",
      day: "Tuesday",
      nth: "th",
      today: 12,
      zero: "",
      meeting: [
        {
          time: "10:00 AM - 11:00 AM" // active: true
        },
        {
          time: "10:00 AM - 11:00 AM" // active: true
        },
        {
          time: "10:00 AM - 11:00 AM"
          // active: true
        }
      ]
    },
    {
      date: "Tuesday122019",
      day: "Tuesday",
      nth: "th",
      today: 12,
      zero: "",
      meeting: [
        {
          time: "10:00 AM - 11:00 AM"
          // active: true
        },
        {
          time: "10:00 AM - 11:00 AM"
          // active: true
        },
        {
          time: "10:00 AM - 11:00 AM",
          active: true
        }
      ]
    }
  ]
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SCHEDULE":
      return {
        ...state,
        schedule: [
          ...state.schedule,
          {
            date: action.forDate,
            meeting: action.forMeeting,
            zero: action.zero,
            today: action.today,
            nth: action.nth,
            day: action.day,
            meeting: [
              {
                time: "10:00 AM - 11:00 AM"
                // active: true
              },
              {
                time: "10:00 AM - 11:00 AM"
                // active: true
              },
              {
                time: "10:00 AM - 11:00 AM",
                active: true
              }
            ]
          }
        ]
      };

    default:
      return state;
  }
};

export const MeetingsProvider = props => {
  const MeetingStore = useReducer(Reducer, initialState);
  console.log(initialState);
  return (
    <MeetingsContext.Provider value={MeetingStore}>
      {props.children}
    </MeetingsContext.Provider>
  );
};
