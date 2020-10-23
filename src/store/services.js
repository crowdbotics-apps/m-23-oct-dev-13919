import axios from "axios"
import {
  NEW_CONNECTOR_HGJHG_USERNAME,
  NEW_CONNECTOR_HGJHG_PASSWORD
} from "react-native-dotenv"
const newConnectorhgjhg = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/13919/storyboard/13065/",
  auth: {
    username: NEW_CONNECTOR_HGJHG_USERNAME,
    password: NEW_CONNECTOR_HGJHG_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
const plugin = axios.create({
  baseURL:
    "https://crowdbotics-slack-dev.herokuapp.com/dashboard/app/7307/storyboard/8491/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
