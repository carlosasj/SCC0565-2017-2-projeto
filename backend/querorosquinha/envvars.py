import os


def cast_bool(val):
    list_true = ['true', 't', 'yes', 'y', '1']
    list_false = ['false', 'f', 'no', 'n', '0']

    val = str(val).lower()

    if val in list_true:
        return True
    elif val in list_false:
        return False
    else:
        raise ValueError(
            '"{}" is not a valid value to cast as "bool"'.format(val))


def cast_string(val):
    return str(val)


def cast_int(val):
    return int(val)


cast_functions = {
    'bool': cast_bool,
    'str': cast_string,
    'int': cast_int,
}


def getenv(var_name, default=None, cast=None):
    var = os.getenv(var_name, default)
    if var is None:
        raise ValueError('"{}" is not defined'.format(var_name))

    if cast is None:
        return var
    else:
        return cast_functions[cast](var)
