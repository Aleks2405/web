var builder = WebApplication.CreateBuilder(args);
var app = builder.Build(); 

app.MapGet("/customs_duty", (double price) => Custorms_duty(price));

string Custorms_duty (double a)
{
    double count = 0;
    
    if (a > 200)
    {
        count = (a / 100 * 15) + a;         
    }
    else
    {
        count = a;                                     
    }
    return $"����� ����� ������� � ������ ���������� ������� ���������� = { Math.Round(count, 2)}�";
}

app.Run();
