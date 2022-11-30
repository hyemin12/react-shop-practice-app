import { configureStore, createSlice } from "@reduxjs/toolkit";

// 액션타입
export type StockAction =
  | ReturnType<typeof addItem>
  | ReturnType<typeof addCount>
  | ReturnType<typeof minusCount>;

export interface ItemProps {
  id?: string;
  title?: string;
  artist?: string;
  desc?: string;
  thumbnail?: string;
  price?: number;
  pieUrl?: string;
  quan?: number | undefined;
}

export type ItemsState = ItemProps[];

let initialState = [
  {
    id: "pp-01",
    title: "Kids-story",
    artist: "Thomas Buisson",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1661961110218-35af7210f803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8ZGlnaXRhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 10,
    pieUrl: "https://cloud.protopie.io/p/8a6461ad85",
    quan: 1,
  },
  {
    id: "pp-02",
    title: "mockyapp",
    artist: "Ahmed Amr",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1526570207772-784d36084510?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGlnaXRhbCUyMHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 20,
    pieUrl: "https://cloud.protopie.io/p/27631ac9d5",
    quan: 1,
  },
  {
    id: "pp-03",
    title: "macOS Folder Concept",
    artist: "Dominik Kandravý",
    desc: "Folder concept prototype by Dominik Kandravý.",
    thumbnail:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRpZ2l0YWwlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 30,
    pieUrl: "https://cloud.protopie.io/p/acde5ccdf9",
    quan: 1,
  },
  {
    id: "pp-04",
    title: "Translator",
    artist: "Tony Kim",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1588413354874-c5a8301a235f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGRpZ2l0YWwlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 40,
    pieUrl: "https://cloud.protopie.io/p/b91edba11d",
    quan: 1,
  },
  {
    id: "pp-05",
    title: "In-car voice control",
    artist: "Tony Kim",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGRpZ2l0YWwlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 50,
    pieUrl: "https://cloud.protopie.io/p/6ec7e70d1a",
    quan: 1,
  },
  {
    id: "pp-06",
    title: "The Adventures of Proto",
    artist: "Richard Oldfield",
    desc: `Made exclusively for Protopie Playoff 2021
            Shout up if you get stuck!
            For the full experience. View in the Protopie App.
            #PieDay #PlayOff #ProtoPie`,
    thumbnail:
      "https://images.unsplash.com/photo-1611472173362-3f53dbd65d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGRpZ2l0YWwlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 60,
    pieUrl: "https://cloud.protopie.io/p/95ee13709f",
    quan: 1,
  },
  {
    id: "pp-07",
    title: "Sunglasses shop app",
    artist: "Mustafa Alabdullah",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTMxfHxkaWdpdGFsJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 70,
    pieUrl: "https://cloud.protopie.io/p/6f336cac8c",
    quan: 1,
  },
  {
    id: "pp-08",
    title: "Alwritey—Minimalist Text Editor",
    artist: "Fredo Tan",
    desc: `This minimalist text editor prototype was made with ProtoPie by Fredo Tan.
            ---
            Inspired by Writty, a simple writing app by Carlos Yllobre. Try out Writty at https://writtyapp.com.
            ---
            ProtoPie is an interactive prototyping tool for all digital products.
            ---
            Learn more about ProtoPie at https://protopie.io.`,
    thumbnail:
      "https://images.unsplash.com/photo-1643122966696-a67c288b39d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU4fHxkaWdpdGFsJTIwcHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    price: 80,
    pieUrl: "https://cloud.protopie.io/p/946f88f8d3",
    quan: 1,
  },
  {
    id: "pp-09",
    title: "Voice search for TV",
    artist: "Tony Kim",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 90,
    pieUrl: "https://cloud.protopie.io/p/60ee64cda0",
    quan: 1,
  },
  {
    id: "pp-10",
    title: "Finance App Visual Interaction 2.0",
    artist: "Arpit Agrawal",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 100,
    pieUrl:
      "https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch",
    quan: 1,
  },
  {
    id: "pp-11",
    title: "Whack-a-mole",
    artist: "Changmo Kang",
    desc: "This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",
    thumbnail:
      "https://images.unsplash.com/photo-1659536540437-510ce63eb672?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8NzB8fHByb2R1Y3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    price: 90,
    pieUrl: "https://cloud.protopie.io/p/ab796f897e",
    quan: 1,
  },
  {
    id: "pp-12",
    title: "Voice Note",
    artist: "Haerin Song",
    desc: `Made by Haerin Song
            (Soda Design)`,
    thumbnail:
      "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    price: 120,
    pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    quan: 1,
  },
];

const cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: "pp-12",
      title: "Voice Note",
      artist: "Haerin Song",
      desc: `Made by Haerin Song
            (Soda Design)`,
      thumbnail:
        "https://images.unsplash.com/photo-1622434641406-a158123450f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHxwcm9kdWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      price: 90,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
      quan: 1,
    },
  ],
  reducers: {
    addItem: (state, action) => {
      let index = state.findIndex((a) => a.id === action.payload.id);

      if (index >= 0) {
        state[index].quan++;
      } else {
        state.push(action.payload);
      }
    },
    addCount(state, action) {
      let index = state.findIndex((a) => a.id === action.payload);
      state[index].quan++;
    },
    minusCount(state, action) {
      let index = state.findIndex((a) => a.id === action.payload);
      if (state[index].quan <= 1) {
        return state.filter((order) => order.id !== action.payload);
      } else {
        state[index].quan--;
      }
    },
    removeItem(state, action) {
      const newArr = state.filter((order) => order.id !== action.payload);
      return newArr;
    },
    removeAll(state) {
      state = [];
      return state;
    },
  },
});

const stock = createSlice({
  name: "stock",
  initialState: initialState,
  reducers: {},
});
export let { addItem, addCount, minusCount, removeItem, removeAll } =
  cart.actions;

const store = configureStore({
  reducer: {
    stock: stock.reducer,
    cart: cart.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
