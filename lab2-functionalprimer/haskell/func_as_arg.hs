--create inpFunc
inpFunc = [1..5] 

--Define applicatorFunc
applicatorFunc inpFunc s = if s=='s' then sum inpFunc else (sum inpFunc)/5  

main = do
    putStrLn "Enter the starting integer (a): "
    a <- readLn
    putStrLn "Enter the ending integer (b): "
    b <- readLn
    let inpFunc = [a..b] -- Generate the list of integers from a to b
        result = applicatorFunc inpFunc 'a' -- Call applicatorFunc with inpFunc and 'a' as args
    putStrLn $ "Result = " ++ show result