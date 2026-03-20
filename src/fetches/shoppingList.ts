import type { ShoppingListForm } from "../types/shoppingList/ShoppingListForm";
import type { FlattenedShoppingList } from "../types/shoppingList/ShoppingListRequests";
import { fetchData } from "./fetchData";
import { createFetchPipelineThunk } from "./fetchPipeline";

export const upsertShoppingList = createFetchPipelineThunk<
  ShoppingListForm,
  FlattenedShoppingList
>({
  selectStatus: () => '',
  apiCall: (payload) => fetchData<ShoppingListForm>('/shoppinglist', 'POST', payload)
})