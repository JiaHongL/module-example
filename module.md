## NgModule
    1.AppModule : root module , 視為全部module的最上層. 
    2.CoreModule : 放置一次性使用的components、directives、pipes、services.(如:UserService) 
    3.SharedModule : 放置可共用的components、directives、pipes、services , 讓其它module使用.
    4.FeatureModule : 放置有相關特色的components、directives、pipes、services , 集合成一個具有特殊/功能性的Module.(如:CardModule)
    5.LazyModule : 為了讓Angular做延遲載入(lazy loading) , 所切割而成的module.

## Git SubModule (共同開發)
    1.可讓專案引入其他項目,當成專案的子項目,並且具有版本控管.
    2.可讓不同專案共同開發一個子項目.    

## Npm Module (共享使用)
    1.把已開發完成的module上傳到npm,讓其它專案使用,安裝與更新都使用npm作為管理.
    2.像安裝套件一樣,安裝完後直接import到專案裡面,並不需要像git submodule把項目引入到專案結構裡.