import {
  ADD_PRODUCT_CART_FAILURE,
  ADD_PRODUCT_CART_REQUEST,
  ADD_PRODUCT_CART_SUCCESS,
  FETCH_ArticalsDATA_REQUEST,
  FETCH_BrandsDATA_FAILURE,
  FETCH_BrandsDATA_REQUEST,
  FETCH_BrandsDATA_SUCCESS,
  FETCH_CART_FAILURE,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_OffersDATA_FAILURE,
  FETCH_OffersDATA_REQUEST,
  FETCH_OffersDATA_SUCCESS,
  FETCH_ORDERS_FAILURE,
  FETCH_ORDERS_REQUEST,
  FETCH_ORDERS_SUCCESS,
  FETCH__ArticalsDATA_FAILURE,
  FETCH__ArticalsDATA_SUCCESS,
  GET_SINGLE_PRODUCT_FAILURE,
  GET_SINGLE_PRODUCT_REQUEST,
  GET_SINGLE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_CART_FAILURE,
  REMOVE_PRODUCT_CART_REQUEST,
} from "./actionTypes";

const init = {
  products: [],
  error: "",
  loading: true,
  currentProduct: {},
  cart: [],
  orders: [],
  myOffers:[],
  Brands:[],
  Articals:[]
};

const productReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_DATA_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        products: payload,
        error: "",
        loading: false,
      };
    }

    case FETCH_DATA_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }



    case FETCH_OffersDATA_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case FETCH_OffersDATA_SUCCESS: {
      return {
        ...state,
        myOffers: payload,
        error: "",
        loading: false,
      };
    }

    case FETCH_OffersDATA_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }


    case FETCH_BrandsDATA_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case FETCH_BrandsDATA_SUCCESS: {
      return {
        ...state,
        Brands: payload,
        error: "",
        loading: false,
      };
    }

    case FETCH_BrandsDATA_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }


    case FETCH_ArticalsDATA_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case FETCH__ArticalsDATA_SUCCESS: {
      return {
        ...state,
        Articals: payload,
        error: "",
        loading: false,
      };
    }

    case FETCH__ArticalsDATA_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }






    case GET_SINGLE_PRODUCT_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case GET_SINGLE_PRODUCT_SUCCESS: {
      return {
        ...state,
        error: "",
        currentProduct: payload,
        loading: false,
      };
    }

    case GET_SINGLE_PRODUCT_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }

    case ADD_PRODUCT_CART_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case ADD_PRODUCT_CART_SUCCESS: {
      return {
        ...state,
        error: "",
        cart: [...state.cart, payload],
        loading: false,
      };
    }

    case ADD_PRODUCT_CART_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }

    case FETCH_CART_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case FETCH_CART_SUCCESS: {
      return {
        ...state,
        error: "",
        cart: [...payload],
        loading: false,
      };
    }

    case FETCH_CART_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }

    case REMOVE_PRODUCT_CART_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case REMOVE_PRODUCT_CART_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }

    case FETCH_ORDERS_REQUEST: {
      return {
        ...state,
        error: "",
        loading: true,
      };
    }

    case FETCH_ORDERS_SUCCESS: {
      return {
        ...state,
        error: "",
        orders: [...payload],
        loading: false,
      };
    }

    case FETCH_ORDERS_FAILURE: {
      return {
        ...state,
        error: payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
