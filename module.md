大家好,想請問一下上次社群小聚看到的Git Submodule的問題,
例如：
    A專案有 git repository  (有個CardModule)
    B專案有 git repository
    B專案想共用A專案的CardModule , 並且有git當版控.

作法1：
    cd A專案/src/app/CardModule add a new git repository 然後上傳到git ,
    在B專案使用 git subModule add CardModule 的 git repository 到Ｂ專案指定的地方.

作法2：
    直接把CardModule獨立出來 , 一樣開一個新的 git repository , 然後Ａ和Ｂ專案再用subModule加回各自專案內.

不確定哪個才是正常的做法?
PS:好像比較偏git的問題XD
