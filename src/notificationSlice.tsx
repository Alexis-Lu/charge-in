import { createSlice } from "@reduxjs/toolkit";

interface Notification {
  avatarData: object;
  prenom: string;
  nom: string;
  text: string;
  check: boolean;
  date: string;
}

interface NotificationState {
  notifications: Notification[];
  notificationCount: number;
}

const initialState: NotificationState = {
  notifications: [
    {
      avatarData: { name: "P" },
      prenom: "Prénom",
      nom: "Nom",
      text: "a ajouté un installateur",
      check: false,
      date: "Il y a 3 jours",
    },
    {
      avatarData: { name: "P" },
      prenom: "Prénom",
      nom: "Nom",
      text: "a ajouté un installateur",
      check: true,
      date: "Il y a 3 jours",
    },
    {
      avatarData: { name: "P" },
      prenom: "Prénom",
      nom: "Nom",
      text: "a ajouté un installateur",
      check: true,
      date: "Il y a 3 jours",
    },
    {
      avatarData: { name: "P" },
      prenom: "Prénom",
      nom: "Nom",
      text: "a ajouté un installateur",
      check: true,
      date: "Il y a 3 jours",
    },
  ],
  notificationCount: 28,
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    clearNotifications: (state) => {
      state.notifications = [];
      state.notificationCount = 0;
    },
  },
});

export const { clearNotifications } = notificationSlice.actions;

export default notificationSlice.reducer;
