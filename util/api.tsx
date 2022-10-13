import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJkaXhpdC5wQGNyZXN0aW5mb3N5c3RlbXMubmV0IiwiaWF0IjoxNjY1NTY5NjgzLCJleHAiOjE2NjYxNzQ0ODN9.BM5Hfoz9eGgj4OTUM8V4ARrDQODCYJAT5HW00-Xp8YU"
  }
});

