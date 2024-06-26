import type { TagModel } from '@/models/TagModel'
import type { SnippetModel } from '../models/SnippetModel'
import { defineStore } from 'pinia'

export const useSnippetStore = defineStore('snippets', {
  state: () => ({
    snippets: new Array<SnippetModel>(),
    tags: new Array<TagModel>(),
    snippetSource: 'NONE',
    collectionID: '',
    CollectionName: '',
    isSearchInProgress: false,
    searchTargetType: '',
    searchTargetSubType: '',

    DistinctTagNames: [],
    CurrentSnippet: {} as SnippetModel
  }),
  /*getters: {
        doubleCount: (state) => state.count * 2,
      },*/
  actions: {}
})
