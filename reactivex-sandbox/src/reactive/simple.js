export default class Simple
{

    toString()
    {
        return "get a job"
    }

    padMe(tNm)
    {
        var t = tNm + "";
        if (t.length < 2)
        {
            return "0" + t;
        }
        return t;
    }

}