import { IProduct } from '@/app/types/menu/IMenu';
import { ICartState } from '@/app/types/redux/ICart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: ICartState = {
    products: [],
    quantity: 0,
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            const index: number = state.products.findIndex((product) => product.data.id === action.payload.id);
            const findProduct = state.products[index];
            if (index >= 0) {
                findProduct.inCount += 1;
                findProduct.inPrice += Number(action.payload.price);
                state.quantity += 1;
                state.total += Number(action.payload.price);
            } else {
                state.products.push({ data: action.payload, inPrice: Number(action.payload.price), inCount: 1 });
                state.quantity += 1;
                state.total += Number(action.payload.price);
            }
        },
        deleteProduct: (state, action: PayloadAction<{ id: string }>) => {
            const index: number = state.products.findIndex((product) => product.data.id == action.payload.id);
            if (index !== -1) {
                const deletedProduct = state.products[index];
                const amountToSubtract = deletedProduct.inCount * Number(deletedProduct.data.price);
                state.total -= amountToSubtract;
                state.quantity -= deletedProduct.inCount;
                state.products.splice(index, 1);
            }
        },
        incrementProduct: (state, action: PayloadAction<{ id: string }>) => {
            const index: number = state.products.findIndex((product) => product.data.id == action.payload.id);
            const findProduct = state.products[index];
            if (index !== -1) {
                findProduct.inPrice += Number(findProduct.data.price);
                findProduct.inCount += 1;
                state.total += Number(findProduct.data.price);
                state.quantity += 1;
            }
        },

        decrementProduct: (state, action: PayloadAction<{ id: string }>) => {
            const index: number = state.products.findIndex((product) => product.data.id == action.payload.id);
            if (index !== -1) {
                const product = state.products[index];
                if (product.inCount < 2) {
                    return
                }
                product.inCount -= 1;
                state.total -= Number(product.data.price);
                product.inPrice -= Number(product.data.price);
                state.quantity -= 1;

            }
        },

        optinalIncrementProduct: (state, action: PayloadAction<{ data: IProduct, count: number }>) => {
            const index: number = state.products.findIndex((product) => product.data.id === action.payload.data.id);
            const findProduct = state.products[index];
            if (index >= 0) {
                findProduct.inCount += action.payload.count;
                findProduct.inPrice += Number(action.payload.data.price) * action.payload.count;
                state.quantity += action.payload.count;
                state.total += (Number(action.payload.data.price) * action.payload.count);
            } else {
                state.products.push({ data: action.payload.data, inPrice: (Number(action.payload.data.price) * action.payload.count), inCount: action.payload.count });
                state.quantity += action.payload.count;
                state.total += (Number(action.payload.data.price) * action.payload.count);
            }
        },
        reset: (state) => {
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
});

export const { optinalIncrementProduct, addProduct, decrementProduct, incrementProduct, deleteProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
