import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/v1/",
  withCredentials: true,
});

const offerSearchRoute = "search/offer";
const createOfferRoute = "offer/create";
const negotiationRoute = "negotiation";
export { offerSearchRoute, createOfferRoute, negotiationRoute };
export default api;
