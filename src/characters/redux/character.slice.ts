import { ApiRepository } from "../../core/services/api.repository";
import { Character } from "../types/character";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type CharacterState = {
  characters: Character[];
};

const initialState: CharacterState = {
  characters: [],
};

export const loadCharacterAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<Character>) => {
    return await repo.getAll();
  }
);

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCharacterAsync.fulfilled, (state, { payload }) => ({
      ...state,
      characters: payload,
    }));
  },
});

export default characterSlice.reducer;
