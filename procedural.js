FUNCTION read_size() : INTERGER
VAR 
    ps : INTEGER;
BEGIN    
    REPEAT
        Read(ps);
    UNTIL (ps <= 0 OR n > 1);
    RETURN ps;    
END 

PROCEDURE dot_product(n :INTEGER, VAR T: ARRAY_OF_INTEGER)
VAR
    ps : INTEGER;
BEGIN 
    FOR ps FROM v1 TO v2 DO
        Read(v1(v2));
    END_FOR
END            